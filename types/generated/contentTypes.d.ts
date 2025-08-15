import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutPageDataAboutPageData extends Schema.SingleType {
  collectionName: 'about_page_database';
  info: {
    singularName: 'about-page-data';
    pluralName: 'about-page-database';
    displayName: 'About-page-data';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    about: Attribute.Component<'about-us.about'>;
    boardComposition: Attribute.Component<'about-us.board'>;
    contatcs: Attribute.Component<'about-us.contacts'>;
    history: Attribute.Component<'about-us.history-content', true>;
    documents: Attribute.Component<'about-us.docs', true>;
    banner: Attribute.Component<'banners.about-us-header-banner', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-page-data.about-page-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-page-data.about-page-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAcademyCourseAcademyCourse extends Schema.CollectionType {
  collectionName: 'academy_courses';
  info: {
    singularName: 'academy-course';
    pluralName: 'academy-courses';
    displayName: 'AcademyCourses';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    courses: Attribute.Component<'courses.list', true>;
    courseRequirement: Attribute.Component<
      'condition-item.popular-products',
      true
    >;
    studyProcess: Attribute.Component<'condition-item.popular-products', true>;
    rewiews: Attribute.Component<'mentors.list', true>;
    selectionStages: Attribute.Component<'condition-item.steps', true>;
    aboutAcademy: Attribute.Component<'humolab.about-academy', true>;
    banner: Attribute.Component<'banners.banner', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::academy-course.academy-course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::academy-course.academy-course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAgentAgent extends Schema.CollectionType {
  collectionName: 'agents';
  info: {
    singularName: 'agent';
    pluralName: 'agents';
    displayName: 'AgentsList';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    banner: Attribute.Component<'list.banner'>;
    agents: Attribute.Component<'agents.list', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::agent.agent',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::agent.agent',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAtmAtm extends Schema.CollectionType {
  collectionName: 'atms';
  info: {
    singularName: 'atm';
    pluralName: 'atms';
    displayName: 'ATMsList';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    ATMs: Attribute.Component<'at-ms.list', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::atm.atm', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::atm.atm', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBannerFinisherBannerFinisher extends Schema.SingleType {
  collectionName: 'banner_finishers';
  info: {
    singularName: 'banner-finisher';
    pluralName: 'banner-finishers';
    displayName: 'BannerFinisher';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::banner-finisher.banner-finisher',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::banner-finisher.banner-finisher',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCardCard extends Schema.CollectionType {
  collectionName: 'cards';
  info: {
    singularName: 'card';
    pluralName: 'cards';
    displayName: 'Cards';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bannerBackground: Attribute.String;
    image: Attribute.Media;
    conditions: Attribute.Component<'condition-item.conditions', true>;
    type: Attribute.Enumeration<
      ['Visa', '\u041A\u043E\u0440\u0442\u0438 \u043C\u0438\u043B\u043B\u0438']
    >;
    product_key: Attribute.Relation<
      'api::card.card',
      'oneToOne',
      'api::product-key.product-key'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::card.card', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::card.card', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCardDetailCardDetail extends Schema.CollectionType {
  collectionName: 'card_details';
  info: {
    singularName: 'card-detail';
    pluralName: 'card-details';
    displayName: 'CardDetails';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    conditions: Attribute.Component<'condition-item.conditions', true>;
    cardApplySteps: Attribute.Component<'condition-item.steps', true>;
    faqs: Attribute.Component<'faq.content', true>;
    isProductActive: Attribute.Boolean;
    product_key: Attribute.Relation<
      'api::card-detail.card-detail',
      'oneToOne',
      'api::product-key.product-key'
    >;
    productTitle: Attribute.String;
    banner: Attribute.Component<'banners.card-details-banner', true>;
    applyProductKey: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::card-detail.card-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::card-detail.card-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCityCity extends Schema.CollectionType {
  collectionName: 'cities';
  info: {
    singularName: 'city';
    pluralName: 'cities';
    displayName: 'Cities';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cities: Attribute.Component<'cities.citiy-list', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCreditCredit extends Schema.CollectionType {
  collectionName: 'credits';
  info: {
    singularName: 'credit';
    pluralName: 'credits';
    displayName: 'Credit';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
    conditions: Attribute.Component<'condition-item.condition-item', true>;
    product_key: Attribute.Relation<
      'api::credit.credit',
      'oneToOne',
      'api::product-key.product-key'
    >;
    isForLegalEntities: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::credit.credit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::credit.credit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCreditDetailCreditDetail extends Schema.CollectionType {
  collectionName: 'credit_details';
  info: {
    singularName: 'credit-detail';
    pluralName: 'credit-details';
    displayName: 'CreditDetails';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    conditions: Attribute.Component<'condition-item.conditions', true>;
    creditApplySteps: Attribute.Component<'condition-item.steps', true>;
    calculator: Attribute.Component<'calculator.calculator'>;
    faqs: Attribute.Component<'faq.content', true>;
    isProductActive: Attribute.Boolean;
    product_key: Attribute.Relation<
      'api::credit-detail.credit-detail',
      'oneToOne',
      'api::product-key.product-key'
    >;
    banner: Attribute.Component<'banners.credit-details-header-banner', true>;
    productTitle: Attribute.String;
    applyProductKey: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::credit-detail.credit-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::credit-detail.credit-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyExchangeCurrencyExchange
  extends Schema.CollectionType {
  collectionName: 'currency_exchanges';
  info: {
    singularName: 'currency-exchange';
    pluralName: 'currency-exchanges';
    displayName: 'CurrencyExchange';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    currency: Attribute.Component<'currency-exchange.currency', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency-exchange.currency-exchange',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency-exchange.currency-exchange',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDepositDeposit extends Schema.CollectionType {
  collectionName: 'deposits';
  info: {
    singularName: 'deposit';
    pluralName: 'deposits';
    displayName: 'Deposit';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    conditions: Attribute.Component<'condition-item.condition-item', true>;
    bannerBackground: Attribute.String;
    isForLegalEntities: Attribute.Boolean;
    product_key: Attribute.Relation<
      'api::deposit.deposit',
      'oneToOne',
      'api::product-key.product-key'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::deposit.deposit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::deposit.deposit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDepositDetailDepositDetail extends Schema.CollectionType {
  collectionName: 'deposit_details';
  info: {
    singularName: 'deposit-detail';
    pluralName: 'deposit-details';
    displayName: 'DepositDetails';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    conditions: Attribute.Component<'condition-item.conditions', true>;
    depositApplySteps: Attribute.Component<'condition-item.steps', true>;
    calculator: Attribute.Component<'calculator.calculator'>;
    faqs: Attribute.Component<'faq.content', true>;
    isProductActive: Attribute.Boolean;
    product_key: Attribute.Relation<
      'api::deposit-detail.deposit-detail',
      'oneToOne',
      'api::product-key.product-key'
    >;
    productTitle: Attribute.String;
    banner: Attribute.Component<'banners.deposit-details-banner', true>;
    applyProductKey: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::deposit-detail.deposit-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::deposit-detail.deposit-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentDocument extends Schema.CollectionType {
  collectionName: 'documents';
  info: {
    singularName: 'document';
    pluralName: 'documents';
    displayName: 'document';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    documents: Attribute.Component<'faq.documents', true>;
    key: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::document.document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::document.document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.CollectionType {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'FAQ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    key: Attribute.String;
    isGeneral: Attribute.Boolean;
    content: Attribute.Component<'faq.content', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiGetSingleBannerGetSingleBanner
  extends Schema.CollectionType {
  collectionName: 'get_single_banners';
  info: {
    singularName: 'get-single-banner';
    pluralName: 'get-single-banners';
    displayName: 'GetSingleBanner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    key: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    bannerBackground: Attribute.String;
    buttonLabel: Attribute.String;
    href: Attribute.String;
    image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::get-single-banner.get-single-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::get-single-banner.get-single-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageDataHomePageData extends Schema.SingleType {
  collectionName: 'home_page_datas';
  info: {
    singularName: 'home-page-data';
    pluralName: 'home-page-datas';
    displayName: 'HomePageData';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    popularProducts: Attribute.Component<
      'condition-item.popular-products',
      true
    >;
    usefullSection: Attribute.Component<'usefull-section.list', true>;
    calculator: Attribute.Component<'calculator.calculator', true>;
    banners: Attribute.Component<'banners.home-page-header-banner', true>;
    single_banner: Attribute.Relation<
      'api::home-page-data.home-page-data',
      'oneToOne',
      'api::get-single-banner.get-single-banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page-data.home-page-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page-data.home-page-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::home-page-data.home-page-data',
      'oneToMany',
      'api::home-page-data.home-page-data'
    >;
    locale: Attribute.String;
  };
}

export interface ApiIslamicCalculatorPeriodIslamicCalculatorPeriod
  extends Schema.CollectionType {
  collectionName: 'islamic_calculator_periods';
  info: {
    singularName: 'islamic-calculator-period';
    pluralName: 'islamic-calculator-periods';
    displayName: 'islamicCalculatorPeriods';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    islamicCalculatorPeriods: Attribute.Component<
      'calculator.islamic-periods',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::islamic-calculator-period.islamic-calculator-period',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::islamic-calculator-period.islamic-calculator-period',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIslamicProductApplicationIslamicProductApplication
  extends Schema.CollectionType {
  collectionName: 'islamic_product_applications';
  info: {
    singularName: 'islamic-product-application';
    pluralName: 'islamic-product-applications';
    displayName: 'IslamicProductApplications';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    lastName: Attribute.String;
    patronymic: Attribute.String;
    phone: Attribute.String;
    city: Attribute.String;
    inn: Attribute.String;
    product: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::islamic-product-application.islamic-product-application',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::islamic-product-application.islamic-product-application',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIslamicServiceDetailIslamicServiceDetail
  extends Schema.CollectionType {
  collectionName: 'islamic_service_details';
  info: {
    singularName: 'islamic-service-detail';
    pluralName: 'islamic-service-details';
    displayName: 'islamicServiceDetail';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    stepperTitle: Attribute.String;
    muzarabaTable: Attribute.Component<'calculator.muzaraba-table'>;
    condition: Attribute.Component<'condition-item.conditions', true>;
    stepper: Attribute.Component<'condition-item.steps', true>;
    faqs: Attribute.Component<'faq.content', true>;
    product_key: Attribute.Relation<
      'api::islamic-service-detail.islamic-service-detail',
      'oneToOne',
      'api::product-key.product-key'
    >;
    isProductActive: Attribute.Boolean;
    calculator: Attribute.Component<'calculator.islamic-calculator'>;
    title: Attribute.String;
    banner: Attribute.Component<'banners.islamic-header-banners', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::islamic-service-detail.islamic-service-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::islamic-service-detail.islamic-service-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIslamicWindowIslamicWindow extends Schema.SingleType {
  collectionName: 'islamic_windows';
  info: {
    singularName: 'islamic-window';
    pluralName: 'islamic-windows';
    displayName: 'IslamicWindow';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    charity_title: Attribute.String;
    islamic_contact_title: Attribute.String;
    service_list: Attribute.Component<'items.service-list'>;
    charity_info: Attribute.Component<'services.charity-info'>;
    chariah_commitet: Attribute.Component<'services.chariah-commitet'>;
    contact_list: Attribute.Component<'coordinates.contact-list', true>;
    calculator: Attribute.Component<'calculator.islamic-calculator'>;
    banner: Attribute.Component<'banners.islamic-header-banners', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::islamic-window.islamic-window',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::islamic-window.islamic-window',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJobApplicationJobApplication extends Schema.CollectionType {
  collectionName: 'job_applications';
  info: {
    singularName: 'job-application';
    pluralName: 'job-applications';
    displayName: 'JobApplications';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    direction: Attribute.String;
    vacancy: Attribute.String;
    city: Attribute.String;
    phone: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::job-application.job-application',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::job-application.job-application',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJobDirectionJobDirection extends Schema.CollectionType {
  collectionName: 'job_directions';
  info: {
    singularName: 'job-direction';
    pluralName: 'job-directions';
    displayName: 'jobDirections';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    direction: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::job-direction.job-direction',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::job-direction.job-direction',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLegalEntitiesHomePageLegalEntitiesHomePage
  extends Schema.CollectionType {
  collectionName: 'legal_entities_home_pages';
  info: {
    singularName: 'legal-entities-home-page';
    pluralName: 'legal-entities-home-pages';
    displayName: 'LegalEntitiesHomePage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    calculators: Attribute.Component<'calculator.calculator', true>;
    banner: Attribute.Component<'banners.legal-entities-header-banner', true>;
    productsForBusiness: Attribute.Component<
      'legal-entities.popular-products',
      true
    >;
    single_banner: Attribute.Relation<
      'api::legal-entities-home-page.legal-entities-home-page',
      'oneToOne',
      'api::get-single-banner.get-single-banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::legal-entities-home-page.legal-entities-home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::legal-entities-home-page.legal-entities-home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMerchantMerchant extends Schema.CollectionType {
  collectionName: 'merchants';
  info: {
    singularName: 'merchant';
    pluralName: 'merchants';
    displayName: 'MerchantsList';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    merchants: Attribute.Component<'merchants.list', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::merchant.merchant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::merchant.merchant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewNew extends Schema.CollectionType {
  collectionName: 'news';
  info: {
    singularName: 'new';
    pluralName: 'news';
    displayName: 'News';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    paragList: Attribute.Component<'paragraph.list', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiNotFoundBannerFinisherNotFoundBannerFinisher
  extends Schema.SingleType {
  collectionName: 'not_found_banner_finishers';
  info: {
    singularName: 'not-found-banner-finisher';
    pluralName: 'not-found-banner-finishers';
    displayName: 'NotFoundBannerFinisher';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::not-found-banner-finisher.not-found-banner-finisher',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::not-found-banner-finisher.not-found-banner-finisher',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOfficeOffice extends Schema.CollectionType {
  collectionName: 'offices';
  info: {
    singularName: 'office';
    pluralName: 'offices';
    displayName: 'OfficesList';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    offices: Attribute.Component<'offices.list', true>;
    banner: Attribute.Component<'list.banner'>;
    title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::office.office',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::office.office',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductKeyProductKey extends Schema.CollectionType {
  collectionName: 'product_keys';
  info: {
    singularName: 'product-key';
    pluralName: 'product-keys';
    displayName: 'Product_key';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    key: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-key.product-key',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-key.product-key',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: 'projects';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    scopes: Attribute.Component<'islamic-projects.condition', true>;
    conditionsTitle: Attribute.String;
    conditionList: Attribute.Component<'islamic-projects.condition', true>;
    key: Attribute.String;
    descriptions: Attribute.Component<'islamic-projects.description', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVacancyVacancy extends Schema.CollectionType {
  collectionName: 'vacancies';
  info: {
    singularName: 'vacancy';
    pluralName: 'vacancies';
    displayName: 'Vacancies';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jobTitle: Attribute.String;
    jobCity: Attribute.String;
    vacanciesDetails: Attribute.Component<'vacancies-details.item'>;
    jobDirection: Attribute.Relation<
      'api::vacancy.vacancy',
      'oneToOne',
      'api::job-direction.job-direction'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vacancy.vacancy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vacancy.vacancy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVacancyInfoVacancyInfo extends Schema.CollectionType {
  collectionName: 'vacancy_infos';
  info: {
    singularName: 'vacancy-info';
    pluralName: 'vacancy-infos';
    displayName: 'VacancyInfo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    humoNumbers: Attribute.Component<'condition-item.conditions', true>;
    humoInfo: Attribute.Component<'list.banner', true>;
    banner: Attribute.Component<'banners.vacancies-header-banner', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vacancy-info.vacancy-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vacancy-info.vacancy-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-page-data.about-page-data': ApiAboutPageDataAboutPageData;
      'api::academy-course.academy-course': ApiAcademyCourseAcademyCourse;
      'api::agent.agent': ApiAgentAgent;
      'api::atm.atm': ApiAtmAtm;
      'api::banner-finisher.banner-finisher': ApiBannerFinisherBannerFinisher;
      'api::card.card': ApiCardCard;
      'api::card-detail.card-detail': ApiCardDetailCardDetail;
      'api::city.city': ApiCityCity;
      'api::credit.credit': ApiCreditCredit;
      'api::credit-detail.credit-detail': ApiCreditDetailCreditDetail;
      'api::currency-exchange.currency-exchange': ApiCurrencyExchangeCurrencyExchange;
      'api::deposit.deposit': ApiDepositDeposit;
      'api::deposit-detail.deposit-detail': ApiDepositDetailDepositDetail;
      'api::document.document': ApiDocumentDocument;
      'api::faq.faq': ApiFaqFaq;
      'api::get-single-banner.get-single-banner': ApiGetSingleBannerGetSingleBanner;
      'api::home-page-data.home-page-data': ApiHomePageDataHomePageData;
      'api::islamic-calculator-period.islamic-calculator-period': ApiIslamicCalculatorPeriodIslamicCalculatorPeriod;
      'api::islamic-product-application.islamic-product-application': ApiIslamicProductApplicationIslamicProductApplication;
      'api::islamic-service-detail.islamic-service-detail': ApiIslamicServiceDetailIslamicServiceDetail;
      'api::islamic-window.islamic-window': ApiIslamicWindowIslamicWindow;
      'api::job-application.job-application': ApiJobApplicationJobApplication;
      'api::job-direction.job-direction': ApiJobDirectionJobDirection;
      'api::legal-entities-home-page.legal-entities-home-page': ApiLegalEntitiesHomePageLegalEntitiesHomePage;
      'api::merchant.merchant': ApiMerchantMerchant;
      'api::new.new': ApiNewNew;
      'api::not-found-banner-finisher.not-found-banner-finisher': ApiNotFoundBannerFinisherNotFoundBannerFinisher;
      'api::office.office': ApiOfficeOffice;
      'api::product-key.product-key': ApiProductKeyProductKey;
      'api::project.project': ApiProjectProject;
      'api::vacancy.vacancy': ApiVacancyVacancy;
      'api::vacancy-info.vacancy-info': ApiVacancyInfoVacancyInfo;
    }
  }
}
