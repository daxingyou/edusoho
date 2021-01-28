<?php

namespace Biz\Visualization\Job;

use Biz\System\Service\SettingService;
use Biz\Visualization\Dao\UserLearnDailyDao;

class RefreshUserLearnDailyJob extends BaseRefreshJob
{
    const REFRESH_TYPE = 'user';
    const CACHE_NAME = 'refresh_user';
    const LIMIT = 10000;

    public function execute()
    {
        $statisticsSetting = $this->getSettingService()->get('videoEffectiveTimeStatistics', []);

        $totalPage = ceil($this->biz['db']->fetchColumn('SELECT COUNT(*) FROM `user_learn_daily`') / self::LIMIT);
        for ($page = 0; $page <= $totalPage; ++$page) {
            $start = $page * self::LIMIT;
            if (empty($statisticsSetting) || 'playing' == $statisticsSetting['statistical_dimension']) {
                $this->refreshByWatchDaily($start, self::LIMIT);
            } else {
                $this->refreshByStayDaily($start, self::LIMIT);
            }
        }

        $this->getCacheService()->clear(self::CACHE_NAME);
    }

    protected function refreshByStayDaily($start, $limit)
    {
        $updateFields = $this->biz['db']->fetchAll("
            SELECT l.id AS id, IF(s.sumTime, s.sumTime, 0) AS sumTime FROM `user_learn_daily` l 
                LEFT JOIN user_stay_daily s 
                ON l.dayTime = s.dayTime AND l.userId = s.userId LIMIT {$start}, {$limit};
        ");

        if (!empty($updateFields)) {
            $this->getUserLearnDailyDao()->batchUpdate(array_column($updateFields, 'id'), $updateFields);
        }
        $this->getLogger()->addInfo("从{$start}刷新user_learn_daily结束");
    }

    protected function refreshByWatchDaily($start, $limit)
    {
        $watchData = $this->biz['db']->fetchAll("
            SELECT l.id AS id, IF(s.sumTime, s.sumTime, 0) AS sumTime FROM user_learn_daily l 
                INNER JOIN user_video_daily s 
                ON l.dayTime = s.dayTime AND l.userId = s.userId LIMIT {$start}, {$limit};
        ");

        $watchData = array_column($watchData, null, 'id');

        $stayData = $this->biz['db']->fetchAll("
            SELECT l.id AS id, IF(sum(s.sumTime), sum(s.sumTime), 0) AS sumTime FROM user_learn_daily l 
                INNER JOIN activity_stay_daily s 
                ON l.dayTime = s.dayTime AND l.userId = s.userId AND s.mediaType != 'video' 
                GROUP BY l.userId, l.dayTime ORDER BY l.userId, l.dayTime LIMIT {$start}, {$limit};
        ");
        $stayData = array_column($stayData, null, 'id');
        array_walk($stayData, function (&$data) use (&$watchData) {
            $data['sumTime'] += empty($watchData[$data['id']]) ? 0 : $watchData[$data['id']]['sumTime'];
            unset($watchData[$data['id']]);
        });

        $updateFields = array_merge($stayData, $watchData);
        if (!empty($updateFields)) {
            $this->getUserLearnDailyDao()->batchUpdate(array_column($updateFields, 'id'), $updateFields);
        }

        $this->getLogger()->addInfo("从{$start}刷新user_learn_daily结束");
    }

    /**
     * @return SettingService
     */
    protected function getSettingService()
    {
        return $this->biz->service('System:SettingService');
    }

    /**
     * @return UserLearnDailyDao
     */
    protected function getUserLearnDailyDao()
    {
        return $this->biz->dao('Visualization:UserLearnDailyDao');
    }
}
