<?php
namespace Custom\Service\User;


interface UserService
{
    public function getUserByStaffNo($staffNo);
    public function resetUserOrganizationId($organizationId);
}