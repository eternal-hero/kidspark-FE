export default class Web {

    //Supporter
    static SUPPORTER_INFO_WEB = `/admin/supporter/:supporter_user_id:/info`;
    static SUPPORTER_PROFILE_WEB = `/admin/supporter/:supporter_user_id:/profile`;
    static SUPPORTER_SUPPORT_AREA_WEB = `/admin/supporter/:supporter_user_id:/support-area`;
    static SUPPORTER_PRE_INTERVIEW_WEB = `/admin/supporter/:supporter_user_id:/pre-interview`;
    static SUPPORTER_SITTER_SETTING_WEB = `/admin/supporter/:supporter_user_id:/sitter`;
    static SUPPORTER_CHILDBIRTH_SETTING_WEB = `/admin/supporter/:supporter_user_id:/childbirth`;
    static SUPPORTER_SICK_CHILDREN_CARE_SETTING_WEB = `/admin/supporter/:supporter_user_id:/sick-children-care`;
    static SUPPORTER_HOUSEKEEPER_SETTING_WEB = `/admin/supporter/:supporter_user_id:/housekeeper`;
    static SUPPORTER_WORKS_IMAGE_WEB = `/admin/supporter/:supporter_user_id:/works-image`;
    static SUPPORTER_WORKS_IMAGE_DETAIL_WEB = `/admin/supporter/:supporter_user_id:/works-image/:works_image_id:/`;
    static SUPPORTER_PASSWORD_SETTING_WEB = `/admin/supporter/:supporter_user_id:/password-setting`;
    static SUPPORTER_IDENTITY_APPLICATIONS = `/admin/supporter/:supporter_id:/identity-applications/`;
    static SUPPORTER_APPLICATION = `/admin/supporter/:supporter_id:/application/`;


    //GUARDIAN
    static GUARDIAN_LIST_WEB = `/admin/guardian/`;
    static GUARDIAN_INFO_WEB = `/admin/guardian/:guardian_id:/info`
    static GUARDIAN_PROFILE_WEB = `/admin/guardian/:guardian_id:/profile`;
    static GUARDIAN_CHILDREN_WEB = `/admin/guardian/:guardian_id:/children`;
    static GUARDIAN_PROFILE_IMAGE_WEB = `/admin/guardian/:guardian_id:/profile-image-edit`;
    static GUARDIAN_PASSWORD_SETTING_WEB = `/admin/guardian/:guardian_id:/password-setting`;
    static GUARDIAN_IDENTITY_VERIFICATIONGS = `/admin/guardian/:guardian_id:/identity-verifications/`;

    //Verify
    static VERIFY_SUPPORTER_LIST_WEB = `/admin/customer-management/indentity-verification/supporter/`
    static VERIFY_SUPPORTER_DETAIL_WEB = `/admin/supporter/:supporter_id:/application/:application_id:/detail/`
    static VERIFY_GUARDIAN_LIST_WEB = `/admin/customer-management/indentity-verification/guardian/`
    static VERIFY_GUARDIAN_DETAIL_WEB = `/admin/guardian/:guardian_id:/identity-verifications/:verification_id:/`
}
