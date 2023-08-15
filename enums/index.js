

export const STATUS_CODES = Object.freeze({
  success: 200,
  badRequest: 400,
  unAuthorized: 401,
  forbidden: 403,
  notFound: 404,
  serverError: 500,
});

export const TOASTERS = Object.freeze({
  success : "SuccessToast",
  error : "ErrorToast",
  warning : "WarningToast",
  info : "InfoToast",
})
export const MODALS = Object.freeze({
  info : "InfoModal",
  fail : "FailModal",
  success : "SuccessModal",
  warning : "WarningModal",
  confirmation :  "ConfirmationModal",
})
export const INFO_MESSSAGES = Object.freeze({
  noResult : "NoResult" , 
  notAuthorized : "NotAuthorized" ,
  empty : "EmptyMessage" , 
  notFound : "NotFound", 
  success : "SuccessMessage",
  fail : "FailMessage" ,
})
export const ERROR_HANDLER = Object.freeze({
  toaster: 0.0,
  confirmation: 0.1,
  authRedirect:0.2,
  notFoundRedirect:0.3, 
});
export const SUCCESS_HANDLER = Object.freeze({
  toaster: 1.0,
  confirmation: 1.1,
});
export const ERROR_TYPE = Object.freeze({
  APIError: 2.0,
  APISuccess: 2.1,
  APIOnCall : 2.2,
  APISetteled:2.3
});

export const HTTP_STATES = Object.freeze({
  error: 2.0,
  success: 2.1,
  calling : 2.2,
  setteled:2.3
});
/** Refer to All roles Code Numbers
 * @typedef {Object} USERS_ROLES 
 * @property {String} superAdmin Super admin Role
 * @property {String} dataManagement Data Management Role.
 * @property {String} DonationsServiceAdmin 
 * @property {String} DonationsEmpolyee 
 * @property {String} PublicationServiceAdmin 
 * @property {String} PublicationEmpolyee 
 */
/**
 * @type {USERS_ROLES}
 * 
 */
export const USERS_ROLES = Object.freeze({
  superAdmin:"1",
  dataManagement : "2",
  DonationsServiceAdmin:"3",
  DonationsEmpolyee:"5",

  PublicationServiceAdmin:"4",
  PublicationEmpolyee:"6",

  AnnexesServiceAdmin:"7",
  EngineeringDepartmentOfDirectorateEmployee:"8",
  DirectorateEmployee : "9",
  EngineeringDepartmentEmployee: "10",
  ManagementEmployee: "11",
  SubCommitteeEmployee : "12",
  
  AdmissionServiceAdmin:"13",
  registeredUser:"14",
  EmployeeOfCentralAdministration : "15",
  ReligiousSectorEmployee:"16",
  MinisterEmployee: "17",
  AdministrationEmployee: "18",
  CompetentEmployee:"19",
  EmployeeOfCenter:"20",

});
/**
 * @typedef {Object} PATHES_TYPES 
 * @property {String} match matching route like /:param/parent/child/:id
 * @property {String} url matching specific full url /ar/parent/child/1 
 */
export const PATHES_TYPES = Object.freeze({
  match : "match" , 
  url : "url"
})


/** Refer to All roles Code Numbers
 * @typedef {Object} PATH  
 * @property {PATHES_TYPES} type path type
 * @property {String} path  path url or route
 */
/**
 * @typedef {Object.<string , PATH >} define pathes for use in permissions
 * @property {PATH} all
 * @property {PATH} users
 * @property {PATH} services
 * @property {PATH} emailNotifications
 * @property {PATH} deleteSetting
 * @property {PATH} userListingManangeJobs
 * @property {PATH} userProfileManangeJobs
 * 
 */
export const PATHES = Object.freeze({
  all :   {
    type : PATHES_TYPES.url , 
    url :  "/"
  } , 
  users :   {
    type : PATHES_TYPES.url , 
    url :  "/users"
  } , 
  services : {
    type : PATHES_TYPES.url , 
    url :  "/services"
  } ,
  emailNotifications :   {
    type : PATHES_TYPES.url , 
    url :  "/EmailsNotifications"
  } ,
  deleteSetting :   {
    type : PATHES_TYPES.url , 
    url :  "/SettingsManagement"
  },
  userListingManangeJobs :   {
    type : PATHES_TYPES.url , 
    url :  "/users/listing/manage-job"
  },
  userProfileManangeJobs :   {
    type : PATHES_TYPES.match , 
    url :  "/users/profile/:userId/manage-job"
  },
  addUser :   {
    type : PATHES_TYPES.url , 
    url :  "/users/add"
  },
  assignUserToWorkplace :   {
    type : PATHES_TYPES.url , 
    url :  "/users/assign-workplace"
  },
  listingEditUser :   {
    type : PATHES_TYPES.url , 
    url :  "/users/listing/edit"
  },
  profileEditUser :   {
    type : PATHES_TYPES.match , 
    url :  "/users/listing/profile/:id/edit"
  },
  RolesPreviligesToUsers : {
    type : PATHES_TYPES.url , 
    url :  "/users/previliges"
  },
  ReleasesServiceListing :   {
    type : PATHES_TYPES.url , 
    url :  "/services/releases"
  },
  servicesDescription :   {
    type : PATHES_TYPES.url , 
    url :  "/services/services-list"
  },
  Missions :   {
    type : PATHES_TYPES.url , 
    url :  "/missions"
  },
  donationsRequests:   {
    type : PATHES_TYPES.url , 
    url :  "/donations"
  },
  annexesRequests:{
    type : PATHES_TYPES.url , 
    url :  "/services/annexes"
  },
  annexesActivities:{
    type : PATHES_TYPES.url , 
    url:"/services/activities"
  }
})

/**
 * @type {PATH[]} pathes that have permissions
 */
export const PATHES_WITH_PERMISSIONS =Object.freeze([
  PATHES.users , PATHES.services ,  PATHES.emailNotifications , PATHES.deleteSetting , PATHES.userListingManangeJobs ,
  PATHES.userProfileManangeJobs , PATHES.addUser , PATHES.assignUserToWorkplace , PATHES.listingEditUser , PATHES.profileEditUser , PATHES.ReleasesServiceListing , PATHES.donationsRequests, PATHES.Missions , PATHES.annexesRequests , PATHES.annexesActivities
]);

/**
 * @readonly
 * @type {Object.<USERS_ROLES, PATH[]>} pathes permissable to role to access it
 * 
 * 
 */
export const USERS_ROLES_PERMISSIONS = Object.freeze({
  [USERS_ROLES.superAdmin]:[PATHES.all],
  [USERS_ROLES.dataManagement] : [PATHES.users , PATHES.services ,],
  [USERS_ROLES.DonationsServiceAdmin] : [PATHES.users , PATHES.services ],
  [USERS_ROLES.PublicationServiceAdmin] : [ PATHES.users , PATHES.services ],
  [USERS_ROLES.DonationsEmpolyee] : [PATHES.donationsRequests, PATHES.Missions],
  [USERS_ROLES.DirectorateEmployee] : [PATHES.Missions , PATHES.emailNotifications],
  [USERS_ROLES.ManagementEmployee] : [PATHES.Missions , PATHES.emailNotifications],
  [USERS_ROLES.SubCommitteeEmployee] : [PATHES.Missions , PATHES.emailNotifications],
  [USERS_ROLES.EngineeringDepartmentOfDirectorateEmployee] : [PATHES.Missions , PATHES.emailNotifications],
  [USERS_ROLES.EngineeringDepartmentEmployee] : [PATHES.Missions],
  [USERS_ROLES.AdministrationEmployee] :[PATHES.Missions],
  [USERS_ROLES.EmployeeOfCenter] :[PATHES.Missions],
  [USERS_ROLES.AdmissionServiceAdmin]:[PATHES.users,PATHES.services],
  [USERS_ROLES.AnnexesServiceAdmin]:[PATHES.users,PATHES.services , PATHES.annexesActivities],
  [USERS_ROLES.EmployeeOfCentralAdministration] : [PATHES.Missions, PATHES.emailNotifications],
  [USERS_ROLES.ReligiousSectorEmployee] : [PATHES.Missions , PATHES.emailNotifications],
  [USERS_ROLES.MinisterEmployee]:[PATHES.Missions , PATHES.emailNotifications],
 
});

/**
 * @readonly
 * @type {Object.<USERS_ROLES, PATH[]>} pathes not permitted to role to access it
 */
export const USERS_ROLES_NOT_AUTHORIZED = Object.freeze({
  [USERS_ROLES.superAdmin] :[PATHES.donationsRequests, PATHES.Missions],
  [USERS_ROLES.dataManagement] : [ PATHES.userListingManangeJobs , PATHES.userProfileManangeJobs, PATHES.ReleasesServiceListing  , PATHES.RolesPreviligesToUsers , PATHES.servicesDescription ],
  [USERS_ROLES.DonationsServiceAdmin] : [PATHES.assignUserToWorkplace , PATHES.addUser ,PATHES.listingEditUser  ,
   PATHES.profileEditUser, PATHES.ReleasesServiceListing , PATHES.RolesPreviligesToUsers , PATHES.servicesDescription ],
  [USERS_ROLES.PublicationServiceAdmin] :[PATHES.assignUserToWorkplace , PATHES.addUser ,PATHES.listingEditUser  ,
    PATHES.profileEditUser , PATHES.RolesPreviligesToUsers , PATHES.servicesDescription] ,
});

/**
 * previliges that super admin control to other roles 
 */
export const PREVLIGIES = Object.freeze({
  all : 0, 
  policyAccess : 1,
  controlUsers : 2, 
  citizenNotifications : 3,
  deleteUser:4
})

export const CLIENT_SIDE_ROLES_PREVILIGES = Object.freeze({
  [USERS_ROLES.superAdmin] : [PREVLIGIES.all] , 
  [USERS_ROLES.dataManagement] : [PREVLIGIES.controlUsers] , 
})

export const SERVER_ERRORS_CODES = Object.freeze({
  nameRequied : "Name#FieldIsRequired",
  emailRequired : "Email#FieldIsRequired",
  emailInvalid : "Email#InvalidEmail",
  emailExist : "Email#AlreadyExists",
  emailNotExist : "Email#NotExist",
  emailExceedMax : "Email#FieldExceededMaxLength",
  emailUserNotFound : "Email#UserNotFound",
  emailContactAdmindatration : "Email#ContactAdministrator",

  nationalIDRequired : "NationalId#FieldIsRequired",
  nationalIDBelowMin : "NationalId#FieldBelowMinLength",
  nationalIDExist : "NationalId#AlreadyExists",
  nationalIDNumbersOnly : "NationalId#NumbersOnlyAllowed",
  phoneRequired : "PhoneNumber#FieldIsRequired",
  phoneNumbersOnly : "PhoneNumber#NumbersOnlyAllowed",
  phoneBelowMin : "PhoneNumber#FieldBelowMinLength",
  otherPhoneNumbersOnly : "PhoneNumber2#NumbersOnlyAllowed",
  otherPhoneBelowMin : "PhoneNumber2#FieldBelowMinLength",
  payloadIsRequired : "Payload#FieldIsRequired",
  passwordIsRequired : "Password#FieldIsRequired",
  passwordIsWeak : "Password#WeakPassword",
  confirmPasswordIsRequired : "ConfirmPassword#FieldIsRequired",
  confirmPasswordDoesNotMatch : "ConfirmPassword#PasswordDoesNotMatch",
  emailOrPasswordIncorrect : "EmailOrPasswordIncorrect",
  userDeactivated : "FailedLoginDeactivatedUser",
  forgotPasswordForDeactivatedUser : "FailedLoginDeactivatedUser",
  resetPasswordForDeactivatedUser : "FailedLoginDeactivatedUser",

  userIDNotFound : "UserId#UserNotFound",
  nameFieldExceedMaxLength : "Name#FieldExceededMaxLength",
  phoneNumberExceedMax : "PhoneNumber#FieldExceededMaxLength",
  otherPhoneFieldExceedMax : "PhoneNumber2#FieldExceededMaxLength",

  newPasswordIsRequired : "NewPassword#FieldIsRequired",
  newPasswordIsWeak : "NewPassword#WeakPassword",
  currentPasswordIsRequired : "CurrentPassword#FieldIsRequired",
  currentPasswordIsWrong : "CurrentPassword#WrongPassword",
  userNotFound : "UserNotFound",
  expiredLink:"InvalidKey",
  problemWithUserId:"ProblemWithUserId",
  notHasAccessToAssignUserRoles : "NotHasAccessToAssignUserRoles",
  notSetCurrentServiceOrRole : "NotSetCurrentServiceOrRole",
  // global errors
  notSaved : "NotSaved",
  somethingWentWrong : "SomethingWentWrong",

  // TODO must have unique value
  organizationChart:{
    organizationNameIsRequired:"Name#FieldIsRequired",
    organizationNameMaxLength:"Name#FieldExceededMaxLength",
    organizationNameInvalidCharacters:"Name#InvalidCharacters",

    organizationStateAssetAddressIsRequired:"StateAssetAddress#FieldIsRequired",
    organizationStateAssetAddressMaxLength:"StateAssetAddress#FieldExceededMaxLength",
    organizationStateAssetAddressInvalidCharacters:"StateAssetAddress#InvalidCharacters",

    organizationStateAssetCodeIsRequired:"StateAssetCode#FieldIsRequired",
    organizationStateAssetCodeMaxLength:"StateAssetCode#FieldExceededMaxLength",
    organizationStateAssetCodeAlreadyExists:"StateAssetCode#AlreadyExists",
    organizationStateAssetCodeInvalidCharacters:"StateAssetCode#InvalidCharacters",

    organizationLevelIsInvalid:"Level#InvalidType",
    organizationParentNotFound:"ParentId#NotFound",
    organizationEntityNotFound:"entityId#NotFound",
    organizationWorkPlaceNotFound:"WorkPlaceId#NotFound",



  }
    
    

})

export const SOMETHING_WENT_WRONG_SERVER_ERRORS = Object.freeze([
  SERVER_ERRORS_CODES.somethingWentWrong , SERVER_ERRORS_CODES.notSaved
])

export const SERVER_CODES_MESSAGES = Object.freeze({
  [SERVER_ERRORS_CODES.nameRequied]: "general.forms.userNameRequiredErrorMessage" , // by default, you must have been validated it in client side, but in case ya3ne
  
  [SERVER_ERRORS_CODES.emailRequired]:"general.forms.emailRequiredErrorMessage", // by default, you must have been validated it in client side, but in case ya3ne
  [SERVER_ERRORS_CODES.emailInvalid]:"general.forms.emailInvalidErrorMessage", // by default, you must have been validated it in client side, but in case ya3ne
  [SERVER_ERRORS_CODES.emailExist]:"general.forms.emailAlreadyExistErrorMessage",
  [SERVER_ERRORS_CODES.emailNotExist] : "general.forms.emailNotExistErrorMessage",
  [SERVER_ERRORS_CODES.emailUserNotFound] : "general.forms.emailNotExistErrorMessage",
  [SERVER_ERRORS_CODES.emailExceedMax] : "general.forms.oldPasswordWrongErrorMessage",

  [SERVER_ERRORS_CODES.nationalIDRequired]:"general.forms.nationalIDRequiredErrorMessage", // by default, you must have been validated it in client side, but in case ya3ne
  [SERVER_ERRORS_CODES.nationalIDBelowMin]:"general.forms.nationalIDInvalidErrorMessage", // by default, you must have been validated it in client side, but in case ya3ne
  [SERVER_ERRORS_CODES.nationalIDExist]:"general.forms.nationalIDAlreadyExistErrorMessage",
  [SERVER_ERRORS_CODES.nationalIDNumbersOnly]:"general.forms.nationalIDNumbersOnlyErrorMessage",
 

  [SERVER_ERRORS_CODES.phoneRequired]:"general.forms.phoneRequiredErrorMessage", // by default, you must have been validated it in client side, but in case ya3ne
  [SERVER_ERRORS_CODES.phoneBelowMin]:"general.forms.phoneBelowMinErrorMessage", // by default, you must have been validated it in client side, but in case ya3ne
  [SERVER_ERRORS_CODES.phoneNumbersOnly]:"general.forms.phoneNumbersOnlyErrorMessage",

  [SERVER_ERRORS_CODES.otherPhoneNumbersOnly]:"general.forms.phoneNumbersOnlyErrorMessage",
  [SERVER_ERRORS_CODES.otherPhoneBelowMin]:"general.forms.phoneBelowMinErrorMessage",
  
  [SERVER_ERRORS_CODES.payloadIsRequired]:"general.forms.payloadRequiredErrorMessage",
  [SERVER_ERRORS_CODES.passwordIsRequired]:"general.forms.passwordRequiredErrorMessage",
  [SERVER_ERRORS_CODES.passwordIsWeak]:"general.forms.passwordWeakErrorMessage",
  [SERVER_ERRORS_CODES.confirmPasswordIsRequired]:"general.forms.confirmPasswordRequiredErrorMessage",
  [SERVER_ERRORS_CODES.confirmPasswordDoesNotMatch]:"general.forms.confirmPasswordNotMatchingErrorMessage",
  [SERVER_ERRORS_CODES.emailOrPasswordIncorrect]:"pages.login.passwordOrUserInvalidMessage",

  [SERVER_ERRORS_CODES.nameFieldExceedMaxLength] : "general.forms.fieldMaxLengthErrorMessage",
  [SERVER_ERRORS_CODES.phoneNumberExceedMax] : "general.forms.phoneNumberMaxLengthErrorMessage",
  [SERVER_ERRORS_CODES.otherPhoneFieldExceedMax] : "general.forms.otherPhoneFieldMaxLengthErrorMessage",
  


  [SERVER_ERRORS_CODES.newPasswordIsRequired] : "general.forms.newPasswordRequiredErrorMessage",
  [SERVER_ERRORS_CODES.newPasswordIsWeak] : "general.forms.passwordWeakErrorMessage",
  [SERVER_ERRORS_CODES.currentPasswordIsRequired] : "general.forms.oldPasswordRequiredErrorMessage",
  [SERVER_ERRORS_CODES.currentPasswordIsWrong] : "general.forms.oldPasswordWrongErrorMessage",

  [SERVER_ERRORS_CODES.emailContactAdmindatration] : "pages.forgotPassword.cantSentResetLinkErrorMessage",
  [SERVER_ERRORS_CODES.userDeactivated] : "pages.forgotPassword.cantSentResetLinkErrorMessage",
  [SERVER_ERRORS_CODES.forgotPasswordForDeactivatedUser] : "pages.forgotPassword.cantSentResetLinkErrorMessage",
  [SERVER_ERRORS_CODES.resetPasswordForDeactivatedUser] : "pages.forgotPassword.cantSentResetLinkErrorMessage",

  // TODO fix duplication keys
  organizationChart:{
    [SERVER_ERRORS_CODES.organizationChart.organizationNameIsRequired] : "general.forms.nameFieldRequiredMessage",
    [SERVER_ERRORS_CODES.organizationChart.organizationNameMaxLength] : "general.forms.fieldMaxLengthErrorMessage",
    
    [SERVER_ERRORS_CODES.organizationChart.organizationStateAssetAddressIsRequired] : "general.forms.addressFieldRequiredMessage",
    [SERVER_ERRORS_CODES.organizationChart.organizationStateAssetAddressMaxLength] : "general.forms.addressFieldMaxLength",
    [SERVER_ERRORS_CODES.organizationChart.organizationStateAssetCodeIsRequired] : "general.forms.codeFieldRequiredMessage",
    [SERVER_ERRORS_CODES.organizationChart.organizationStateAssetCodeMaxLength] : "general.forms.fieldMaxLengthErrorMessage",
    [SERVER_ERRORS_CODES.organizationChart.organizationStateAssetCodeAlreadyExists] : "general.forms.codeFieldAlreadyExistMessage",
  }


});

/**
 * includes roles localization variables 
 */
export const ROLES_NAMES = Object.freeze({
  [USERS_ROLES.superAdmin] : "roles.superAdmin",
  [USERS_ROLES.dataManagement] : "roles.dataManagement",
  [USERS_ROLES.DonationsServiceAdmin] : "pages.users.donationsServiceAdmin",
  [USERS_ROLES.DonationsEmpolyee] : "pages.users.donationEmployee",
  [USERS_ROLES.PublicationServiceAdmin] : "pages.users.publicationsServiceAdmin",
  [USERS_ROLES.PublicationEmpolyee] : "pages.users.publicationsEmployee",
  [USERS_ROLES.DirectorateEmployee] : "pages.users.directorateEmployee",
  [USERS_ROLES.ManagementEmployee] :"pages.users.managementEmployee",
  [USERS_ROLES.SubCommitteeEmployee] :"pages.users.SubCommitteeEmployee",
  [USERS_ROLES.AdministrationEmployee]: "pages.users.AdministrationEmployee",
  [USERS_ROLES.CompetentEmployee]: "pages.users.CompetentEmployee",
  [USERS_ROLES.EngineeringDepartmentEmployee]: "pages.users.EngineeringDepartmentEmployee",
  [USERS_ROLES.EngineeringDepartmentOfDirectorateEmployee] : "pages.users.EngineeringDepartmentOfDirectorateEmployee",
  [USERS_ROLES.EmployeeOfCenter]:"pages.users.EmployeeOfCenter",
  [USERS_ROLES.EmployeeOfCentralAdministration]: "pages.users.EmployeeOfCentralAdministration",
  [USERS_ROLES.ReligiousSectorEmployee] :"pages.users.ReligiousSectorEmployee",
  [USERS_ROLES.MinisterEmployee] : "pages.users.MinisterEmployee",
  [USERS_ROLES.AnnexesServiceAdmin] : "pages.users.AnnexesServiceAdmin",
  [USERS_ROLES.AdmissionServiceAdmin] : "pages.users.AdmissionServiceAdmin",
  [USERS_ROLES.registeredUser] : "pages.users.registerdUser",
})

export const SERVICES = Object.freeze({
  donations : "1",
  publications : "2" ,
  annexes : "3", 
  admission : "4"
})

export const ROLES_SERVICES = Object.freeze({
  [USERS_ROLES.DonationsServiceAdmin] : SERVICES.donations , 
  [USERS_ROLES.DonationsEmpolyee] : SERVICES.donations , 
  [USERS_ROLES.PublicationServiceAdmin] : SERVICES.publications , 
  [USERS_ROLES.PublicationEmpolyee] : SERVICES.publications , 
  [USERS_ROLES.DirectorateEmployee] : SERVICES.annexes ,
  [USERS_ROLES.ManagementEmployee] : SERVICES.annexes ,
  [USERS_ROLES.SubCommitteeEmployee] : SERVICES.annexes ,
  [USERS_ROLES.EngineeringDepartmentEmployee] : SERVICES.annexes ,
  [USERS_ROLES.EngineeringDepartmentOfDirectorateEmployee] : SERVICES.annexes ,
  [USERS_ROLES.AnnexesServiceAdmin] : SERVICES.annexes,

  [USERS_ROLES.AdministrationEmployee] : SERVICES.admission ,
  [USERS_ROLES.CompetentEmployee] : SERVICES.admission ,
  [USERS_ROLES.EmployeeOfCenter] : SERVICES.admission ,
  [USERS_ROLES.EmployeeOfCentralAdministration] : SERVICES.admission ,
  [USERS_ROLES.ReligiousSectorEmployee] : SERVICES.admission ,
  [USERS_ROLES.MinisterEmployee] : SERVICES.admission ,
  [USERS_ROLES.AdmissionServiceAdmin] : SERVICES.admission ,
})

export const SERVICES_NAMES = Object.freeze({
  [SERVICES.donations] : "general.donationServiceName",
  [SERVICES.publications] : "general.publicationServiceName",
  [SERVICES.annexes] : "general.annexesServiceName",
  [SERVICES.admission] : "general.admissionsServiceName",
})


export const POPUP_EMPTY_MSG = Object.freeze({
  noServicesRoles : "noServicesRoles" ,
  noAdminstrativeRoles : "noAdminstrativeRoles"
})

export const NOTIFICATIONS_TOPICS = Object.freeze({
  buyPublication : "BuyBook" ,
  shippingPublication :"DeliverBook"
})

export const NOTIFICATIONS_TOPICS_TITLE = Object.freeze({
  [NOTIFICATIONS_TOPICS.buyPublication] : "pages.notifications.buyNotificationTitle" ,
  [NOTIFICATIONS_TOPICS.shippingPublication] :"pages.notifications.shippingNotificationTitle"
})


export const ROLES_NOTIFICATIONS_TOPICS = Object.freeze({
  [USERS_ROLES.superAdmin] : [] ,
  [USERS_ROLES.dataManagement] : [] ,
  [USERS_ROLES.PublicationEmpolyee] : [NOTIFICATIONS_TOPICS.buyPublication , NOTIFICATIONS_TOPICS.shippingPublication] ,
  [USERS_ROLES.DonationsEmpolyee] : [] ,
  [USERS_ROLES.PublicationServiceAdmin] : [] ,
  [USERS_ROLES.DonationsServiceAdmin] : [] ,
})


export const PAGE_SIZES = Object.freeze([10 , 20 , 50]);

export const ATTACHMENT_STATUS = Object.freeze({
  mandatory : 1 , 
  optional : 2
})