import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsAbout extends Schema.Component {
  collectionName: 'components_about_us_abouts';
  info: {
    displayName: 'about';
    description: '';
  };
  attributes: {
    humoNumbers: Attribute.Component<'condition-item.conditions', true>;
    ratingAgencyGrades: Attribute.Component<
      'about-us.rating-agency-grades',
      true
    >;
    key: Attribute.Enumeration<['about', 'members', 'documents', 'contacts']>;
  };
}

export interface AboutUsBoard extends Schema.Component {
  collectionName: 'components_about_us_boards';
  info: {
    displayName: 'board';
  };
  attributes: {
    members: Attribute.Component<'about-us.members', true>;
  };
}

export interface AboutUsCareer extends Schema.Component {
  collectionName: 'components_about_us_careers';
  info: {
    displayName: 'career';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface AboutUsContacts extends Schema.Component {
  collectionName: 'components_about_us_contacts';
  info: {
    displayName: 'contacts';
  };
  attributes: {
    address: Attribute.String;
    email: Attribute.String;
    phones: Attribute.Component<'about-us.phones', true>;
  };
}

export interface AboutUsDocsContent extends Schema.Component {
  collectionName: 'components_about_us_docs_contents';
  info: {
    displayName: 'docsContent';
  };
  attributes: {
    name: Attribute.String;
    pdf: Attribute.Media;
  };
}

export interface AboutUsDocs extends Schema.Component {
  collectionName: 'components_about_us_docs';
  info: {
    displayName: 'docs';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    docs: Attribute.Media;
  };
}

export interface AboutUsHistoryContent extends Schema.Component {
  collectionName: 'components_about_us_history_contents';
  info: {
    displayName: 'historyContent';
  };
  attributes: {
    year: Attribute.String;
    title: Attribute.String;
    achivements: Attribute.JSON;
  };
}

export interface AboutUsHistory extends Schema.Component {
  collectionName: 'components_about_us_histories';
  info: {
    displayName: 'History';
  };
  attributes: {
    history: Attribute.Component<'about-us.history-content', true>;
  };
}

export interface AboutUsMembers extends Schema.Component {
  collectionName: 'components_about_us_members';
  info: {
    displayName: 'members';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['management', 'supervisor']>;
    name: Attribute.String;
    position: Attribute.Text;
    carrer: Attribute.Component<'about-us.career', true>;
    photo: Attribute.Media;
  };
}

export interface AboutUsPhones extends Schema.Component {
  collectionName: 'components_about_us_phones_s';
  info: {
    displayName: 'phones ';
  };
  attributes: {
    phone: Attribute.String;
    description: Attribute.String;
  };
}

export interface AboutUsRatingAgencyGrades extends Schema.Component {
  collectionName: 'components_about_us_rating_agency_grades';
  info: {
    displayName: 'ratingAgencyGrades';
    description: '';
  };
  attributes: {
    agencyName: Attribute.String;
    gradeCategory: Attribute.String;
    gradeCategoryDetails: Attribute.Text;
    agencyGrade: Attribute.String;
  };
}

export interface AgentsList extends Schema.Component {
  collectionName: 'components_agents_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    category: Attribute.String;
    workSchedule: Attribute.Component<'item.work-schedule', true>;
    services: Attribute.Component<'services.list', true>;
    phone: Attribute.String;
    coordinates: Attribute.Component<'coordinates.item'>;
  };
}

export interface AtMsList extends Schema.Component {
  collectionName: 'components_at_ms_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    coordinates: Attribute.Component<'coordinates.item', true>;
    condition: Attribute.Text;
  };
}

export interface BannersAboutUsHeaderBanner extends Schema.Component {
  collectionName: 'components_banners_about_us_header_banners';
  info: {
    displayName: 'AboutUsHeaderBanner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    background: Attribute.String;
    image: Attribute.Media;
    primaryBtn: Attribute.Component<'buttons.about-us-banner-buttons'>;
    secondaryBtn: Attribute.Component<'buttons.about-us-banner-buttons'>;
  };
}

export interface BannersBanner extends Schema.Component {
  collectionName: 'components_banners_banners';
  info: {
    displayName: 'HumolabHeaderBanner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    background: Attribute.String;
    image: Attribute.Media;
    primaryBtn: Attribute.Component<'buttons.humolab-banner-btns'>;
    secondaryBtn: Attribute.Component<'buttons.humolab-banner-btns'>;
  };
}

export interface BannersBannersCarousel extends Schema.Component {
  collectionName: 'components_banners_banners_carousels';
  info: {
    displayName: 'BannersCarousel';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    label: Attribute.String;
    image: Attribute.Media;
    href: Attribute.String;
  };
}

export interface BannersCardDetailsBanner extends Schema.Component {
  collectionName: 'components_banners_card_details_banners';
  info: {
    displayName: 'CardDetailsBanner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    background: Attribute.String;
    image: Attribute.Media;
    primaryBtn: Attribute.Component<'buttons.card-details-banner-buttons'>;
    secondaryBtn: Attribute.Component<'buttons.card-details-banner-buttons'>;
  };
}

export interface BannersCreditDetailsHeaderBanner extends Schema.Component {
  collectionName: 'components_banners_credit_details_header_banners';
  info: {
    displayName: 'CreditDetailsHeaderBanner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    background: Attribute.String;
    image: Attribute.Media;
    primaryBtn: Attribute.Component<'buttons.credit-details-banner-buttons'>;
    secondaryBtn: Attribute.Component<'buttons.credit-details-banner-buttons'>;
  };
}

export interface BannersDepositDetailsBanner extends Schema.Component {
  collectionName: 'components_banners_deposit_details_banners';
  info: {
    displayName: 'DepositDetailsBanner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    background: Attribute.String;
    image: Attribute.Media;
    primaryBtn: Attribute.Component<'buttons.deposit-details-banner-buttons'>;
    secondaryBtn: Attribute.Component<'buttons.deposit-details-banner-buttons'>;
  };
}

export interface BannersHomePageHeaderBanner extends Schema.Component {
  collectionName: 'components_banners_home_page_header_banners';
  info: {
    displayName: 'HomePageHeaderBanner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    background: Attribute.String;
    image: Attribute.Media;
    primaryBtn: Attribute.Component<'buttons.home-page-banner-buttons'>;
    secondaryBtn: Attribute.Component<'buttons.home-page-banner-buttons'>;
  };
}

export interface BannersIslamicBanner extends Schema.Component {
  collectionName: 'components_banners_islamic_banners';
  info: {
    displayName: 'islamicBanner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    primaryBtn: Attribute.Component<'banners.banner-btn'>;
    secondaryBtn: Attribute.Component<'banners.banner-btn'>;
    background: Attribute.String;
  };
}

export interface BannersIslamicHeaderBanners extends Schema.Component {
  collectionName: 'components_banners_islamic_header_banners';
  info: {
    displayName: 'IslamicHeaderBanners';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
    background: Attribute.String;
    primaryBtn: Attribute.Component<'buttons.islamic-service-detail-btn'>;
    secondaryBtn: Attribute.Component<'buttons.islamic-service-detail-btn'>;
  };
}

export interface BannersLegalEntitiesHeaderBanner extends Schema.Component {
  collectionName: 'components_banners_legal_entities_header_banners';
  info: {
    displayName: 'LegalEntitiesHeaderBanner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    background: Attribute.String;
    image: Attribute.Media;
    primaryBtn: Attribute.Component<'buttons.legal-entities-banner-buttons'>;
    secondaryBtn: Attribute.Component<'buttons.legal-entities-banner-buttons'>;
  };
}

export interface BannersVacanciesHeaderBanner extends Schema.Component {
  collectionName: 'components_banners_vacancies_header_banners';
  info: {
    displayName: 'VacanciesHeaderBanner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    background: Attribute.String;
    image: Attribute.Media;
    primaryBtn: Attribute.Component<'buttons.vacancy-banner-buttons'>;
    secondaryBtn: Attribute.Component<'buttons.vacancy-banner-buttons'>;
  };
}

export interface ButtonsAboutUsBannerButtons extends Schema.Component {
  collectionName: 'components_buttons_about_us_banner_buttons';
  info: {
    displayName: 'AboutUsBannerButtons';
  };
  attributes: {
    label: Attribute.String;
    path: Attribute.String;
    anchor: Attribute.Enumeration<
      ['about-us-finisher-banner', 'about-us-history', 'about-us-tabs']
    >;
  };
}

export interface ButtonsCardDetailsBannerButtons extends Schema.Component {
  collectionName: 'components_buttons_card_details_banner_buttons';
  info: {
    displayName: 'CardDetailsBannerButtons';
  };
  attributes: {
    label: Attribute.String;
    path: Attribute.String;
    anchor: Attribute.Enumeration<
      [
        'card-details-conditions',
        'card-details-apply-steps',
        'products-apply-form',
        'utk-section'
      ]
    >;
  };
}

export interface ButtonsCreditDetailsBannerButtons extends Schema.Component {
  collectionName: 'components_buttons_credit_details_banner_buttons';
  info: {
    displayName: 'CreditDetailsBannerButtons';
  };
  attributes: {
    label: Attribute.String;
    path: Attribute.String;
    anchor: Attribute.Enumeration<
      [
        'credit-details-conditions',
        'credit-details-apply-steps',
        'credit-details-calculator',
        'products-apply-form',
        'utk-section'
      ]
    >;
  };
}

export interface ButtonsDepositDetailsBannerButtons extends Schema.Component {
  collectionName: 'components_buttons_deposit_details_banner_buttons';
  info: {
    displayName: 'DepositDetailsBannerButtons';
  };
  attributes: {
    label: Attribute.String;
    path: Attribute.String;
    anchor: Attribute.Enumeration<
      [
        'deposit-details-conditions',
        'deposit-details-apply-steps',
        'deposit-calculator-section',
        'products-apply-form',
        'utk-section'
      ]
    >;
  };
}

export interface ButtonsHomePageBannerButtons extends Schema.Component {
  collectionName: 'components_buttons_home_page_banner_buttons';
  info: {
    displayName: 'HomePageBannerButtons';
  };
  attributes: {
    label: Attribute.String;
    path: Attribute.String;
    anchor: Attribute.Enumeration<
      [
        'home-page-populaer-products',
        'home-page-calculator',
        'home-page-usefull-section',
        'currency-exchange-section',
        'current-news-section'
      ]
    >;
  };
}

export interface ButtonsHomePageButtons extends Schema.Component {
  collectionName: 'components_buttons_home_page_buttons';
  info: {
    displayName: 'HomePageButtons';
  };
  attributes: {
    label: Attribute.String;
    path: Attribute.String;
    anchor: Attribute.Enumeration<
      [
        'home-page-populaer-products',
        'home-page-calculator',
        'home-page-usefull-section',
        'currency-exchange-section',
        'current-news-section'
      ]
    >;
  };
}

export interface ButtonsHumolabBannerBtns extends Schema.Component {
  collectionName: 'components_buttons_humolab_banner_btns';
  info: {
    displayName: 'HumolabBannerBtns';
  };
  attributes: {
    label: Attribute.String;
    path: Attribute.String;
    anchor: Attribute.Enumeration<
      [
        'about-academy',
        'course-requirements',
        'academy-courses',
        'study-process',
        'selection-stages',
        'academy-reviews',
        'academy-news',
        'academy-faq',
        'academy-contact-us'
      ]
    >;
  };
}

export interface ButtonsIslamicServiceDetailBtn extends Schema.Component {
  collectionName: 'components_buttons_islamic_service_detail_btns';
  info: {
    displayName: 'IslamicServiceDetailBtn';
    description: '';
  };
  attributes: {
    anchor: Attribute.Enumeration<
      [
        'credit-apply-details',
        'muzarraba',
        'products-apply-form',
        'utk-section'
      ]
    >;
    label: Attribute.String;
    path: Attribute.String;
  };
}

export interface ButtonsLegalEntitiesBannerButtons extends Schema.Component {
  collectionName: 'components_buttons_legal_entities_banner_buttons';
  info: {
    displayName: 'LegalEntitiesBannerButtons';
  };
  attributes: {
    label: Attribute.String;
    path: Attribute.String;
    anchor: Attribute.Enumeration<
      [
        'legal-entities-popular-products',
        'legal-entities-calculator',
        'currency-exchange-section',
        'current-news-section'
      ]
    >;
  };
}

export interface ButtonsVacancyBannerButtons extends Schema.Component {
  collectionName: 'components_buttons_vacancy_banner_buttons';
  info: {
    displayName: 'VacancyBannerButtons';
  };
  attributes: {
    label: Attribute.String;
    path: Attribute.String;
    anchor: Attribute.Enumeration<
      [
        'vacancy-list',
        'job-numbers',
        'vacancies-why-humo-section',
        'vacancy-apply'
      ]
    >;
  };
}

export interface CalculatorCalculator extends Schema.Component {
  collectionName: 'components_calculator_calculators';
  info: {
    displayName: 'Calculator';
    description: '';
  };
  attributes: {
    limit: Attribute.Component<'calculator.limit'>;
    formula: Attribute.Text;
    tax: Attribute.Decimal;
    percent: Attribute.String;
    optionsType: Attribute.Enumeration<['currency', 'gender', 'legalStatus']>;
    conditions: Attribute.Component<'calculator.conditions', true>;
    options: Attribute.Component<'calculator.options', true>;
    periods: Attribute.Component<'calculator.periods', true>;
    type: Attribute.Enumeration<['deposit', 'credit']>;
    product_key: Attribute.Relation<
      'calculator.calculator',
      'oneToOne',
      'api::product-key.product-key'
    >;
  };
}

export interface CalculatorConditions extends Schema.Component {
  collectionName: 'components_calculator_conditions_s';
  info: {
    displayName: 'conditions ';
  };
  attributes: {
    status: Attribute.Enumeration<['accept', 'reject']>;
    label: Attribute.String;
  };
}

export interface CalculatorIslamicCalculator extends Schema.Component {
  collectionName: 'components_calculator_islamic_calculators';
  info: {
    displayName: 'islamicCalculator';
    description: '';
  };
  attributes: {
    limit: Attribute.Component<'calculator.limit'>;
    formula: Attribute.Text;
    periods: Attribute.Relation<
      'calculator.islamic-calculator',
      'oneToOne',
      'api::islamic-calculator-period.islamic-calculator-period'
    >;
    product_key: Attribute.Relation<
      'calculator.islamic-calculator',
      'oneToOne',
      'api::product-key.product-key'
    >;
  };
}

export interface CalculatorIslamicPeriodsPercents extends Schema.Component {
  collectionName: 'components_calculator_islamic_periods_percents';
  info: {
    displayName: 'IslamicPeriodsPercents';
  };
  attributes: {
    min: Attribute.Integer;
    max: Attribute.Integer;
    percent: Attribute.Decimal;
  };
}

export interface CalculatorIslamicPeriods extends Schema.Component {
  collectionName: 'components_calculator_islamic_periods';
  info: {
    displayName: 'islamicPeriods';
  };
  attributes: {
    period: Attribute.String;
    periodPercents: Attribute.Component<
      'calculator.islamic-periods-percents',
      true
    >;
  };
}

export interface CalculatorLimit extends Schema.Component {
  collectionName: 'components_calculator_limits';
  info: {
    displayName: 'limit';
  };
  attributes: {
    min: Attribute.Integer;
    max: Attribute.Integer;
  };
}

export interface CalculatorMuzarabaTable extends Schema.Component {
  collectionName: 'components_calculator_muzaraba_tables';
  info: {
    displayName: 'muzarabaTable';
    description: '';
  };
  attributes: {
    tableTitle: Attribute.String;
    tableHead: Attribute.Component<'faq.table-item'>;
    tableBody: Attribute.Component<'faq.table-item', true>;
  };
}

export interface CalculatorOptions extends Schema.Component {
  collectionName: 'components_calculator_options';
  info: {
    displayName: 'options';
    description: '';
  };
  attributes: {
    min: Attribute.Integer;
    max: Attribute.Integer;
    percentRate: Attribute.Decimal;
    value: Attribute.Enumeration<
      [
        '\u0421\u043E\u043C\u043E\u043D\u0438',
        '\u0420\u0443\u0431\u043B\u044C',
        '\u0414\u043E\u043B\u043B\u0430\u0440',
        '\u0415\u0432\u0440\u043E',
        '\u0414\u043B\u044F \u0436\u0435\u043D\u0449\u0438\u043D',
        '\u0414\u043B\u044F \u043C\u0443\u0436\u0447\u0438\u043D',
        '\u0414\u043B\u044F \u044E\u0440.\u043B\u0438\u0446',
        '\u0414\u043B\u044F \u0444\u0438\u0437.\u043B\u0438\u0446'
      ]
    >;
  };
}

export interface CalculatorPeriodsPercents extends Schema.Component {
  collectionName: 'components_calculator_periods_percents';
  info: {
    displayName: 'periodsPercents';
  };
  attributes: {};
}

export interface CalculatorPeriods extends Schema.Component {
  collectionName: 'components_calculator_periods';
  info: {
    displayName: 'periods';
    description: '';
  };
  attributes: {
    key: Attribute.Enumeration<
      [
        'general',
        '\u0414\u043B\u044F \u043C\u0443\u0436\u0447\u0438\u043D',
        '\u0414\u043B\u044F \u0436\u0435\u043D\u0449\u0438\u043D'
      ]
    >;
    periodsContent: Attribute.JSON;
  };
}

export interface CalculatorProduct extends Schema.Component {
  collectionName: 'components_calculator_products';
  info: {
    displayName: 'product';
    description: '';
  };
  attributes: {
    credit: Attribute.Component<'products.credit-id'>;
    deposit: Attribute.Component<'products.deposit-id'>;
  };
}

export interface CitiesCitiyList extends Schema.Component {
  collectionName: 'components_cities_citiy_lists';
  info: {
    displayName: 'citiyList';
    description: '';
  };
  attributes: {
    cityName: Attribute.String;
    cityCode: Attribute.String;
  };
}

export interface ConditionItemConditionItem extends Schema.Component {
  collectionName: 'components_condition_item_condition_items';
  info: {
    displayName: 'ConditionItem';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
  };
}

export interface ConditionItemConditions extends Schema.Component {
  collectionName: 'components_condition_item_conditions';
  info: {
    displayName: 'conditions';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
  };
}

export interface ConditionItemDepositApply extends Schema.Component {
  collectionName: 'components_condition_item_deposit_applies';
  info: {
    displayName: 'depositApply';
  };
  attributes: {
    title: Attribute.String;
    steps: Attribute.Component<'condition-item.steps', true>;
  };
}

export interface ConditionItemPopularProducts extends Schema.Component {
  collectionName: 'components_condition_item_popular_products';
  info: {
    displayName: 'PopularProducts';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    path: Attribute.String;
  };
}

export interface ConditionItemSteps extends Schema.Component {
  collectionName: 'components_condition_item_steps';
  info: {
    displayName: 'steps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    stepId: Attribute.String;
  };
}

export interface ConditionListConditionList extends Schema.Component {
  collectionName: 'components_condition_list_condition_lists';
  info: {
    displayName: 'ConditionList';
    icon: 'grid';
  };
  attributes: {
    items: Attribute.Component<'condition-item.condition-item', true>;
  };
}

export interface ConditionListConditions extends Schema.Component {
  collectionName: 'components_condition_list_conditions';
  info: {
    displayName: 'conditions';
  };
  attributes: {};
}

export interface ConditionListDepositApply extends Schema.Component {
  collectionName: 'components_condition_list_deposit_applies';
  info: {
    displayName: 'depositApply';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ConditionListFaq extends Schema.Component {
  collectionName: 'components_condition_list_faqs';
  info: {
    displayName: 'faq';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.JSON;
  };
}

export interface ConditionListPopularProducts extends Schema.Component {
  collectionName: 'components_condition_list_popular_products';
  info: {
    displayName: 'PopularProducts';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface CoordinatesContactList extends Schema.Component {
  collectionName: 'components_coordinates_contact_lists';
  info: {
    displayName: 'contact_list';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    contact_info: Attribute.Component<'condition-item.condition-item', true>;
  };
}

export interface CoordinatesItem extends Schema.Component {
  collectionName: 'components_coordinates_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    latitude: Attribute.Float;
    longitude: Attribute.Float;
  };
}

export interface CoursesList extends Schema.Component {
  collectionName: 'components_courses_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    image: Attribute.Media;
    formLink: Attribute.String;
  };
}

export interface CurrencyExchangeCurrencyRates extends Schema.Component {
  collectionName: 'components_currency_exchange_currency_rates';
  info: {
    displayName: 'currencyRates';
    description: '';
  };
  attributes: {
    buy: Attribute.Decimal;
    sell: Attribute.Decimal;
    currency: Attribute.Enumeration<['USD', 'RUB', 'EUR']>;
  };
}

export interface CurrencyExchangeCurrency extends Schema.Component {
  collectionName: 'components_currency_exchange_currencies';
  info: {
    displayName: 'currency';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<
      ['\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u044B', '\u041D\u0411\u0422']
    >;
    currencyRates: Attribute.Component<
      'currency-exchange.currency-rates',
      true
    >;
  };
}

export interface ExpierenceItem extends Schema.Component {
  collectionName: 'components_expierence_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    withExpierence: Attribute.Boolean;
    from: Attribute.String;
    to: Attribute.String;
  };
}

export interface FaqAccordionContent extends Schema.Component {
  collectionName: 'components_faq_accordion_contents';
  info: {
    displayName: 'AccordionContent';
    description: '';
  };
  attributes: {
    accordionTitle: Attribute.String;
    accordionContent: Attribute.Blocks;
  };
}

export interface FaqAccordionItem extends Schema.Component {
  collectionName: 'components_faq_accordion_items';
  info: {
    displayName: 'accordionItem';
    description: '';
  };
  attributes: {
    accordionTitle: Attribute.String;
    accordionContent: Attribute.Component<'services.list', true>;
  };
}

export interface FaqContent extends Schema.Component {
  collectionName: 'components_faq_contents';
  info: {
    displayName: 'content';
    description: '';
  };
  attributes: {
    chipTitle: Attribute.String;
    faqDocuments: Attribute.Component<'list.documents'>;
    accordionContent: Attribute.Component<'faq.accordion-content', true>;
  };
}

export interface FaqDocs extends Schema.Component {
  collectionName: 'components_faq_docs';
  info: {
    displayName: 'docs';
    description: '';
  };
  attributes: {
    documents: Attribute.Component<'faq.documents', true>;
    accordionTitle: Attribute.String;
    faqs: Attribute.Relation<'faq.docs', 'oneToMany', 'api::faq.faq'>;
  };
}

export interface FaqDocuments extends Schema.Component {
  collectionName: 'components_faq_documents';
  info: {
    displayName: 'documents';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    pdfs: Attribute.Media;
  };
}

export interface FaqTableItem extends Schema.Component {
  collectionName: 'components_faq_table_items';
  info: {
    displayName: 'tableItem';
  };
  attributes: {
    period: Attribute.String;
    windowIncome: Attribute.String;
    investorIncome: Attribute.String;
  };
}

export interface HumolabAboutAcademy extends Schema.Component {
  collectionName: 'components_humolab_about_academies';
  info: {
    displayName: 'aboutAcademy';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HumolabBanner extends Schema.Component {
  collectionName: 'components_humolab_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ImageItem extends Schema.Component {
  collectionName: 'components_image_items';
  info: {
    displayName: 'item';
  };
  attributes: {};
}

export interface IslamicProjectsConditionList extends Schema.Component {
  collectionName: 'components_islamic_projects_condition_lists';
  info: {
    displayName: 'conditionList';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface IslamicProjectsCondition extends Schema.Component {
  collectionName: 'components_islamic_projects_conditions';
  info: {
    displayName: 'condition';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Component<'islamic-projects.description', true>;
  };
}

export interface IslamicProjectsDescription extends Schema.Component {
  collectionName: 'components_islamic_projects_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface ItemCalculatorConditions extends Schema.Component {
  collectionName: 'components_item_calculator_conditions';
  info: {
    displayName: 'calculatorConditions';
  };
  attributes: {
    accept: Attribute.String;
    reject: Attribute.String;
  };
}

export interface ItemFormula extends Schema.Component {
  collectionName: 'components_item_formulas';
  info: {
    displayName: 'formula';
  };
  attributes: {
    credit: Attribute.Text;
    deposit: Attribute.Text;
  };
}

export interface ItemLimit extends Schema.Component {
  collectionName: 'components_item_limits';
  info: {
    displayName: 'limit';
  };
  attributes: {
    min: Attribute.Integer;
    max: Attribute.Integer;
  };
}

export interface ItemWorkSchedule extends Schema.Component {
  collectionName: 'components_item_work_schedules';
  info: {
    displayName: 'workSchedule';
  };
  attributes: {
    fromDay: Attribute.String;
    toDay: Attribute.String;
    fromTime: Attribute.String;
    toTime: Attribute.String;
  };
}

export interface ItemsList extends Schema.Component {
  collectionName: 'components_items_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface ItemsServiceList extends Schema.Component {
  collectionName: 'components_items_service_lists';
  info: {
    displayName: 'service_list';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    service_list: Attribute.Component<'products.service-item', true>;
  };
}

export interface LegalEntitiesPopularProducts extends Schema.Component {
  collectionName: 'components_legal_entities_popular_products';
  info: {
    displayName: 'popularProducts';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
    redirect: Attribute.String;
  };
}

export interface ListBanner extends Schema.Component {
  collectionName: 'components_list_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ListCities extends Schema.Component {
  collectionName: 'components_list_cities';
  info: {
    displayName: 'cities';
    description: '';
  };
  attributes: {
    value: Attribute.String;
  };
}

export interface ListContent extends Schema.Component {
  collectionName: 'components_list_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface ListCreditCheckbox extends Schema.Component {
  collectionName: 'components_list_credit_checkboxes';
  info: {
    displayName: 'creditCheckbox';
  };
  attributes: {
    label: Attribute.String;
    rates: Attribute.Component<'list.rates', true>;
    limit: Attribute.Component<'item.limit'>;
    conditions: Attribute.Component<'item.calculator-conditions'>;
  };
}

export interface ListDirections extends Schema.Component {
  collectionName: 'components_list_directions';
  info: {
    displayName: 'directions';
  };
  attributes: {
    value: Attribute.String;
  };
}

export interface ListDocuments extends Schema.Component {
  collectionName: 'components_list_documents';
  info: {
    displayName: 'documents';
    description: '';
  };
  attributes: {
    accordionTitle: Attribute.String;
    documentContents: Attribute.Relation<
      'list.documents',
      'oneToMany',
      'api::document.document'
    >;
  };
}

export interface ListRates extends Schema.Component {
  collectionName: 'components_list_rates';
  info: {
    displayName: 'rates';
  };
  attributes: {
    time: Attribute.String;
    ratePercent: Attribute.Integer;
    timeType: Attribute.String;
  };
}

export interface MentorsList extends Schema.Component {
  collectionName: 'components_mentors_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    video: Attribute.Media;
  };
}

export interface MerchantsList extends Schema.Component {
  collectionName: 'components_merchants_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    category: Attribute.String;
    workSchedule: Attribute.Component<'item.work-schedule'>;
    juridicalName: Attribute.String;
    INN: Attribute.String;
    coordinates: Attribute.Component<'coordinates.item'>;
  };
}

export interface MerchantsPersonInfo extends Schema.Component {
  collectionName: 'components_merchants_person_infos';
  info: {
    displayName: 'person_info';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    position_name: Attribute.String;
    image: Attribute.Media;
  };
}

export interface OfficeConditions extends Schema.Component {
  collectionName: 'components_office_conditions';
  info: {
    displayName: 'conditions';
  };
  attributes: {
    crediting: Attribute.Boolean;
    currencyExchange: Attribute.Boolean;
    moneyTransfers: Attribute.Boolean;
    bankCards: Attribute.Boolean;
    RKO: Attribute.Boolean;
  };
}

export interface OfficesList extends Schema.Component {
  collectionName: 'components_offices_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    coordinates: Attribute.Component<'coordinates.item', true>;
    workSchedule: Attribute.Component<'item.work-schedule'>;
    conditions: Attribute.Component<'office.conditions'>;
    services: Attribute.Component<'services.list', true>;
  };
}

export interface ParagraphList extends Schema.Component {
  collectionName: 'components_paragraph_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    paragraph: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ProductsCreditId extends Schema.Component {
  collectionName: 'components_products_credit_ids';
  info: {
    displayName: 'credit_id';
    description: '';
  };
  attributes: {
    credit_id: Attribute.Enumeration<
      [
        'ipoteka',
        'agro',
        'salomati',
        'start-business',
        'tahsil',
        'business',
        'orzu',
        'potrebitelsky',
        'murabahaForConsumption',
        'murabahaForBusiness',
        'murabahaForAuto',
        'muzaraba',
        'business-agro'
      ]
    >;
  };
}

export interface ProductsDepositId extends Schema.Component {
  collectionName: 'components_products_deposit_ids';
  info: {
    displayName: 'deposit_id';
    description: '';
  };
  attributes: {
    deposit_id: Attribute.Enumeration<
      ['kafolat', 'mufid', 'sarchashma', 'jamshavanda', 'srochniy']
    >;
  };
}

export interface ProductsServiceItem extends Schema.Component {
  collectionName: 'components_products_service_items';
  info: {
    displayName: 'service_item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    product_key: Attribute.Relation<
      'products.service-item',
      'oneToOne',
      'api::product-key.product-key'
    >;
  };
}

export interface ServicesChariahCommitet extends Schema.Component {
  collectionName: 'components_services_chariah_commitets';
  info: {
    displayName: 'chariah_commitet';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    person_list: Attribute.Component<'merchants.person-info', true>;
  };
}

export interface ServicesCharityInfo extends Schema.Component {
  collectionName: 'components_services_charity_infos';
  info: {
    displayName: 'charity_info';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    info: Attribute.Component<'services.list', true>;
  };
}

export interface ServicesList extends Schema.Component {
  collectionName: 'components_services_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface UsefullSectionList extends Schema.Component {
  collectionName: 'components_usefull_section_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    redirect: Attribute.String;
    label: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface VacanciesDetailsItem extends Schema.Component {
  collectionName: 'components_vacancies_details_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    title: Attribute.String;
    expierence: Attribute.Component<'expierence.item'>;
    desc: Attribute.Text;
    tasks: Attribute.Component<'items.list', true>;
    expectations: Attribute.Component<'items.list', true>;
    weOffer: Attribute.Component<'items.list', true>;
  };
}

export interface VacnciesJobs extends Schema.Component {
  collectionName: 'components_vacncies_jobs';
  info: {
    displayName: 'jobs';
  };
  attributes: {
    direction: Attribute.String;
    vacancies: Attribute.Component<'vacncies.vacancies', true>;
  };
}

export interface VacnciesVacancies extends Schema.Component {
  collectionName: 'components_vacncies_vacancies';
  info: {
    displayName: 'vacancies';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.about': AboutUsAbout;
      'about-us.board': AboutUsBoard;
      'about-us.career': AboutUsCareer;
      'about-us.contacts': AboutUsContacts;
      'about-us.docs-content': AboutUsDocsContent;
      'about-us.docs': AboutUsDocs;
      'about-us.history-content': AboutUsHistoryContent;
      'about-us.history': AboutUsHistory;
      'about-us.members': AboutUsMembers;
      'about-us.phones': AboutUsPhones;
      'about-us.rating-agency-grades': AboutUsRatingAgencyGrades;
      'agents.list': AgentsList;
      'at-ms.list': AtMsList;
      'banners.about-us-header-banner': BannersAboutUsHeaderBanner;
      'banners.banner': BannersBanner;
      'banners.banners-carousel': BannersBannersCarousel;
      'banners.card-details-banner': BannersCardDetailsBanner;
      'banners.credit-details-header-banner': BannersCreditDetailsHeaderBanner;
      'banners.deposit-details-banner': BannersDepositDetailsBanner;
      'banners.home-page-header-banner': BannersHomePageHeaderBanner;
      'banners.islamic-banner': BannersIslamicBanner;
      'banners.islamic-header-banners': BannersIslamicHeaderBanners;
      'banners.legal-entities-header-banner': BannersLegalEntitiesHeaderBanner;
      'banners.vacancies-header-banner': BannersVacanciesHeaderBanner;
      'buttons.about-us-banner-buttons': ButtonsAboutUsBannerButtons;
      'buttons.card-details-banner-buttons': ButtonsCardDetailsBannerButtons;
      'buttons.credit-details-banner-buttons': ButtonsCreditDetailsBannerButtons;
      'buttons.deposit-details-banner-buttons': ButtonsDepositDetailsBannerButtons;
      'buttons.home-page-banner-buttons': ButtonsHomePageBannerButtons;
      'buttons.home-page-buttons': ButtonsHomePageButtons;
      'buttons.humolab-banner-btns': ButtonsHumolabBannerBtns;
      'buttons.islamic-service-detail-btn': ButtonsIslamicServiceDetailBtn;
      'buttons.legal-entities-banner-buttons': ButtonsLegalEntitiesBannerButtons;
      'buttons.vacancy-banner-buttons': ButtonsVacancyBannerButtons;
      'calculator.calculator': CalculatorCalculator;
      'calculator.conditions': CalculatorConditions;
      'calculator.islamic-calculator': CalculatorIslamicCalculator;
      'calculator.islamic-periods-percents': CalculatorIslamicPeriodsPercents;
      'calculator.islamic-periods': CalculatorIslamicPeriods;
      'calculator.limit': CalculatorLimit;
      'calculator.muzaraba-table': CalculatorMuzarabaTable;
      'calculator.options': CalculatorOptions;
      'calculator.periods-percents': CalculatorPeriodsPercents;
      'calculator.periods': CalculatorPeriods;
      'calculator.product': CalculatorProduct;
      'cities.citiy-list': CitiesCitiyList;
      'condition-item.condition-item': ConditionItemConditionItem;
      'condition-item.conditions': ConditionItemConditions;
      'condition-item.deposit-apply': ConditionItemDepositApply;
      'condition-item.popular-products': ConditionItemPopularProducts;
      'condition-item.steps': ConditionItemSteps;
      'condition-list.condition-list': ConditionListConditionList;
      'condition-list.conditions': ConditionListConditions;
      'condition-list.deposit-apply': ConditionListDepositApply;
      'condition-list.faq': ConditionListFaq;
      'condition-list.popular-products': ConditionListPopularProducts;
      'coordinates.contact-list': CoordinatesContactList;
      'coordinates.item': CoordinatesItem;
      'courses.list': CoursesList;
      'currency-exchange.currency-rates': CurrencyExchangeCurrencyRates;
      'currency-exchange.currency': CurrencyExchangeCurrency;
      'expierence.item': ExpierenceItem;
      'faq.accordion-content': FaqAccordionContent;
      'faq.accordion-item': FaqAccordionItem;
      'faq.content': FaqContent;
      'faq.docs': FaqDocs;
      'faq.documents': FaqDocuments;
      'faq.table-item': FaqTableItem;
      'humolab.about-academy': HumolabAboutAcademy;
      'humolab.banner': HumolabBanner;
      'image.item': ImageItem;
      'islamic-projects.condition-list': IslamicProjectsConditionList;
      'islamic-projects.condition': IslamicProjectsCondition;
      'islamic-projects.description': IslamicProjectsDescription;
      'item.calculator-conditions': ItemCalculatorConditions;
      'item.formula': ItemFormula;
      'item.limit': ItemLimit;
      'item.work-schedule': ItemWorkSchedule;
      'items.list': ItemsList;
      'items.service-list': ItemsServiceList;
      'legal-entities.popular-products': LegalEntitiesPopularProducts;
      'list.banner': ListBanner;
      'list.cities': ListCities;
      'list.content': ListContent;
      'list.credit-checkbox': ListCreditCheckbox;
      'list.directions': ListDirections;
      'list.documents': ListDocuments;
      'list.rates': ListRates;
      'mentors.list': MentorsList;
      'merchants.list': MerchantsList;
      'merchants.person-info': MerchantsPersonInfo;
      'office.conditions': OfficeConditions;
      'offices.list': OfficesList;
      'paragraph.list': ParagraphList;
      'products.credit-id': ProductsCreditId;
      'products.deposit-id': ProductsDepositId;
      'products.service-item': ProductsServiceItem;
      'services.chariah-commitet': ServicesChariahCommitet;
      'services.charity-info': ServicesCharityInfo;
      'services.list': ServicesList;
      'usefull-section.list': UsefullSectionList;
      'vacancies-details.item': VacanciesDetailsItem;
      'vacncies.jobs': VacnciesJobs;
      'vacncies.vacancies': VacnciesVacancies;
    }
  }
}
