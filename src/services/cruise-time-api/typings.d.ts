declare namespace cruisetime {
  type ActionApiDescriptionModel = {
    uniqueName?: string;
    name?: string;
    httpMethod?: string;
    url?: string;
    supportedVersions?: string[];
    parametersOnMethod?: MethodParameterApiDescriptionModel[];
    parameters?: ParameterApiDescriptionModel[];
    returnValue?: ReturnValueApiDescriptionModel;
    allowAnonymous?: boolean;
    implementFrom?: string;
  };

  type ApplicationApiDescriptionModel = {
    modules?: Record<string, any>;
    types?: Record<string, any>;
  };

  type ApplicationAuthConfigurationDto = {
    grantedPolicies?: Record<string, any>;
  };

  type ApplicationConfigurationDto = {
    localization?: ApplicationLocalizationConfigurationDto;
    auth?: ApplicationAuthConfigurationDto;
    setting?: ApplicationSettingConfigurationDto;
    currentUser?: CurrentUserDto;
    features?: ApplicationFeatureConfigurationDto;
    globalFeatures?: ApplicationGlobalFeatureConfigurationDto;
    multiTenancy?: MultiTenancyInfoDto;
    currentTenant?: CurrentTenantDto;
    timing?: TimingDto;
    clock?: ClockDto;
    objectExtensions?: ObjectExtensionsDto;
    extraProperties?: Record<string, any>;
  };

  type ApplicationFeatureConfigurationDto = {
    values?: Record<string, any>;
  };

  type ApplicationGlobalFeatureConfigurationDto = {
    enabledFeatures?: string[];
  };

  type ApplicationLocalizationConfigurationDto = {
    values?: Record<string, any>;
    resources?: Record<string, any>;
    languages?: LanguageInfo[];
    currentCulture?: CurrentCultureDto;
    defaultResourceName?: string;
    languagesMap?: Record<string, any>;
    languageFilesMap?: Record<string, any>;
  };

  type ApplicationLocalizationDto = {
    resources?: Record<string, any>;
  };

  type ApplicationLocalizationResourceDto = {
    texts?: Record<string, any>;
    baseResources?: string[];
  };

  type ApplicationSettingConfigurationDto = {
    values?: Record<string, any>;
  };

  type ChangePasswordInput = {
    /** 用户Id */
    id?: string;
    /** 新密码 */
    password?: string;
  };

  type ChangeSelfPasswordInput = {
    /** 旧密码 */
    oldPassword?: string;
    /** 新密码 */
    newPassword?: string;
  };

  type ClockDto = {
    kind?: string;
  };

  type ControllerApiDescriptionModel = {
    controllerName?: string;
    controllerGroupName?: string;
    isRemoteService?: boolean;
    isIntegrationService?: boolean;
    apiVersion?: string;
    type?: string;
    interfaces?: ControllerInterfaceApiDescriptionModel[];
    actions?: Record<string, any>;
  };

  type ControllerInterfaceApiDescriptionModel = {
    type?: string;
    name?: string;
    methods?: InterfaceMethodApiDescriptionModel[];
  };

  type CreateUserDto = {
    /** 用户名 */
    userName?: string;
    /** 密码hash */
    password: string;
    /** 姓名 */
    name: string;
    /** 手机号 */
    phoneNumber?: string;
    /** 电子邮件 */
    email?: string;
    /** 是否管理员 */
    isSuperAdmin?: boolean;
  };

  type CurrentCultureDto = {
    displayName?: string;
    englishName?: string;
    threeLetterIsoLanguageName?: string;
    twoLetterIsoLanguageName?: string;
    isRightToLeft?: boolean;
    cultureName?: string;
    name?: string;
    nativeName?: string;
    dateTimeFormat?: DateTimeFormatDto;
  };

  type CurrentTenantDto = {
    id?: string;
    name?: string;
    isAvailable?: boolean;
  };

  type CurrentUserDto = {
    isAuthenticated?: boolean;
    id?: string;
    tenantId?: string;
    impersonatorUserId?: string;
    impersonatorTenantId?: string;
    impersonatorUserName?: string;
    impersonatorTenantName?: string;
    userName?: string;
    name?: string;
    surName?: string;
    email?: string;
    emailVerified?: boolean;
    phoneNumber?: string;
    phoneNumberVerified?: boolean;
    roles?: string[];
  };

  type DateTimeFormatDto = {
    calendarAlgorithmType?: string;
    dateTimeFormatLong?: string;
    shortDatePattern?: string;
    fullDateTimePattern?: string;
    dateSeparator?: string;
    shortTimePattern?: string;
    longTimePattern?: string;
  };

  type deleteAppJZStationIdParams = {
    id: number;
  };

  type deleteAppStationIdParams = {
    id: number;
  };

  type deleteAppUserIdParams = {
    id: string;
  };

  type EntityExtensionDto = {
    properties?: Record<string, any>;
    configuration?: Record<string, any>;
  };

  type ExtensionEnumDto = {
    fields?: ExtensionEnumFieldDto[];
    localizationResource?: string;
  };

  type ExtensionEnumFieldDto = {
    name?: string;
    value?: any;
  };

  type ExtensionPropertyApiCreateDto = {
    isAvailable?: boolean;
  };

  type ExtensionPropertyApiDto = {
    onGet?: ExtensionPropertyApiGetDto;
    onCreate?: ExtensionPropertyApiCreateDto;
    onUpdate?: ExtensionPropertyApiUpdateDto;
  };

  type ExtensionPropertyApiGetDto = {
    isAvailable?: boolean;
  };

  type ExtensionPropertyApiUpdateDto = {
    isAvailable?: boolean;
  };

  type ExtensionPropertyAttributeDto = {
    typeSimple?: string;
    config?: Record<string, any>;
  };

  type ExtensionPropertyDto = {
    type?: string;
    typeSimple?: string;
    displayName?: LocalizableStringDto;
    api?: ExtensionPropertyApiDto;
    ui?: ExtensionPropertyUiDto;
    attributes?: ExtensionPropertyAttributeDto[];
    configuration?: Record<string, any>;
    defaultValue?: any;
  };

  type ExtensionPropertyUiDto = {
    onTable?: ExtensionPropertyUiTableDto;
    onCreateForm?: ExtensionPropertyUiFormDto;
    onEditForm?: ExtensionPropertyUiFormDto;
    lookup?: ExtensionPropertyUiLookupDto;
  };

  type ExtensionPropertyUiFormDto = {
    isVisible?: boolean;
  };

  type ExtensionPropertyUiLookupDto = {
    url?: string;
    resultListPropertyName?: string;
    displayPropertyName?: string;
    valuePropertyName?: string;
    filterParamName?: string;
  };

  type ExtensionPropertyUiTableDto = {
    isVisible?: boolean;
  };

  type getAbpApiDefinitionParams = {
    IncludeTypes?: boolean;
  };

  type getAbpApplicationConfigurationParams = {
    IncludeLocalizationResources?: boolean;
  };

  type getAbpApplicationLocalizationParams = {
    CultureName: string;
    OnlyDynamics?: boolean;
  };

  type getAppJZStationIdParams = {
    id: number;
  };

  type getAppJZStationParams = {
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  };

  type getAppStationIdParams = {
    id: number;
  };

  type getAppStationParams = {
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  };

  type getAppUserIdParams = {
    id: string;
  };

  type getAppUserParams = {
    /** 用户名 */
    UserName?: string;
    /** 过滤条件 */
    Name?: string;
    /** 手机号 */
    PhoneNumber?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  };

  type IanaTimeZone = {
    timeZoneName?: string;
  };

  type InterfaceMethodApiDescriptionModel = {
    name?: string;
    parametersOnMethod?: MethodParameterApiDescriptionModel[];
    returnValue?: ReturnValueApiDescriptionModel;
  };

  type JwtTokenResult = {
    /** 访问Token */
    access_token?: string;
    /** RefreshToken 刷新令牌 */
    refresh_token?: string;
    /** 访问Token过期时间 单位秒钟 */
    expires_in?: number;
  };

  type JZStationDto = {
    id?: number;
    /** 基准站位名称 */
    name: string;
    /** 经度 */
    latitude?: number;
    /** 纬度 */
    longitude?: number;
    /** 离开基准站时间 */
    lzTime?: string;
    /** 用户Id */
    userId?: string;
    /** 软删除标记 */
    isDeleted?: boolean;
  };

  type LanguageInfo = {
    cultureName?: string;
    uiCultureName?: string;
    displayName?: string;
    twoLetterISOLanguageName?: string;
    flagIcon?: string;
  };

  type LocalizableStringDto = {
    name?: string;
    resource?: string;
  };

  type LoginDto = {
    /** 用户Id */
    id?: string;
    /** 姓名 */
    name?: string;
    /** 是否超级管理员 */
    isSuperAdmin?: boolean;
    avatar?: string;
  };

  type LoginInput = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    token?: JwtTokenResult;
  };

  type MethodParameterApiDescriptionModel = {
    name?: string;
    typeAsString?: string;
    type?: string;
    typeSimple?: string;
    isOptional?: boolean;
    defaultValue?: any;
  };

  type ModuleApiDescriptionModel = {
    rootPath?: string;
    remoteServiceName?: string;
    controllers?: Record<string, any>;
  };

  type ModuleExtensionDto = {
    entities?: Record<string, any>;
    configuration?: Record<string, any>;
  };

  type MultiTenancyInfoDto = {
    isEnabled?: boolean;
  };

  type NameValue = {
    name?: string;
    value?: string;
  };

  type ObjectExtensionsDto = {
    modules?: Record<string, any>;
    enums?: Record<string, any>;
  };

  type PagedResultDto<JZStationDto> = {
    items?: JZStationDto[];
    totalCount?: number;
  };

  type PagedResultDto<StationDto> = {
    items?: StationDto[];
    totalCount?: number;
  };

  type PagedResultDto<UserDto> = {
    items?: UserDto[];
    totalCount?: number;
  };

  type ParameterApiDescriptionModel = {
    nameOnMethod?: string;
    name?: string;
    jsonName?: string;
    type?: string;
    typeSimple?: string;
    isOptional?: boolean;
    defaultValue?: any;
    constraintTypes?: string[];
    bindingSourceId?: string;
    descriptorName?: string;
  };

  type postAppJZStationIdSaveParams = {
    id: number;
  };

  type postLoginOutLoginParams = {
    refreshToken?: string;
  };

  type PropertyApiDescriptionModel = {
    name?: string;
    jsonName?: string;
    type?: string;
    typeSimple?: string;
    isRequired?: boolean;
    minLength?: number;
    maxLength?: number;
    minimum?: string;
    maximum?: string;
    regex?: string;
  };

  type putAppJZStationIdParams = {
    id: number;
  };

  type putAppStationIdParams = {
    id: number;
  };

  type putAppUserIdParams = {
    id: string;
  };

  type RefreshTokenInput = {
    /** AccessToken */
    accessToken: string;
    /** RefreshToken */
    refreshToken: string;
  };

  type RemoteServiceErrorInfo = {
    code?: string;
    message?: string;
    details?: string;
    data?: Record<string, any>;
    validationErrors?: RemoteServiceValidationErrorInfo[];
  };

  type RemoteServiceErrorResponse = {
    error?: RemoteServiceErrorInfo;
  };

  type RemoteServiceValidationErrorInfo = {
    message?: string;
    members?: string[];
  };

  type ReturnValueApiDescriptionModel = {
    type?: string;
    typeSimple?: string;
  };

  type StationDto = {
    id?: number;
    /** 基准站Id */
    jzStationId?: number;
    /** 名称 */
    name: string;
    /** 经度 */
    latitude?: number;
    /** 维度 */
    longitude?: number;
    /** 抵站时间 */
    dsTime?: string;
    /** 离站时间 */
    lzTime?: string;
    /** 航行速度 */
    speed?: number;
    /** 航渡时间 */
    sailTime?: number;
    /** 航渡距离 */
    distance?: number;
    /** 软删除标记 */
    isDeleted?: boolean;
    /** 站位停留时间 */
    stayTime?: number;
    /** 站位顺序号 排序用 */
    stationIndex?: number;
    /** 用户Id */
    userId?: string;
  };

  type TimeZone = {
    iana?: IanaTimeZone;
    windows?: WindowsTimeZone;
  };

  type TimingDto = {
    timeZone?: TimeZone;
  };

  type TypeApiDescriptionModel = {
    baseType?: string;
    isEnum?: boolean;
    enumNames?: string[];
    enumValues?: any[];
    genericArguments?: string[];
    properties?: PropertyApiDescriptionModel[];
  };

  type UpdateUserDto = {
    id?: string;
    /** 用户名 */
    userName?: string;
    /** 姓名 */
    name: string;
    /** 手机号 */
    phoneNumber?: string;
    /** 电子邮件 */
    email?: string;
    /** 是否管理员 */
    isSuperAdmin?: boolean;
  };

  type UserDto = {
    id?: string;
    /** 用户名 */
    userName?: string;
    /** 姓名 */
    name?: string;
    /** 手机号 */
    phoneNumber?: string;
    /** 手机号是否验证 */
    phoneNumberConfirmed?: boolean;
    /** 电子邮件 */
    email?: string;
    /** 电子邮件是否验证 */
    emailConfirmed?: boolean;
    /** 是否管理员 */
    isSuperAdmin?: boolean;
  };

  type ValidPhoneNumberInput = {
    /** 用户Id */
    userId?: string;
    /** 手机号码 */
    phoneNumber?: string;
    /** 验证码 */
    validCode?: string;
  };

  type WindowsTimeZone = {
    timeZoneId?: string;
  };
}
