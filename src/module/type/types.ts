export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Time string with timezone in ISO 8601 format. eg. 2017-09-15T17:50:00-04:00 */
  Time: any;
  /** Date string in ISO 8601 format: YYYY-mm-dd */
  Date: any;
  /** Time string without timezone. E.g. 2017-09-15T17:50:00 */
  TimeWithoutTz: any;
  /** A raw all-or-nothing JSON object */
  JSON: any;
  /** Any type. Should only be used for checkout questions */
  Any: any;
}

export interface Query {
  addOn?: Maybe<AddOn>;
  calendarWidget: CalendarWidget;
  calendarWidgets: Array<Maybe<CalendarWidget>>;
  categories: Array<Category>;
  commissionCodes: Array<CommissionCode>;
  discount: Discount;
  event: Event;
  eventSet: EventSet;
  host: Host;
  manageBasics: ManageBasics;
  manageCustomize: ManageCustomize;
  manageCustomizeTickets: ManageCustomizeTickets;
  manageTickets: ManageTickets;
  manageWhenRegularEntry: ManageWhenRegularEntry;
  manageWhenTimedEntry: ManageWhenTimedEntry;
  order: Order;
  orderItem: OrderItem;
  orderItems: Array<OrderItem>;
  profile: Profile;
  settlementCurrency?: Maybe<CurrencyCode>;
  timeSlotSelect: TimeSlotSelect;
  timezone?: Maybe<Scalars['String']>;
  transactionCurrency?: Maybe<CurrencyCode>;
  transfer: Transfer;
  upgradableOrder: UpgradableOrder;
  viewer: Viewer;
  whitelistedCountries: Array<Country>;
}


export interface QueryAddOnArgs {
  id: Scalars['ID'];
}


export interface QueryCalendarWidgetArgs {
  id: Scalars['ID'];
  startingDate: Scalars['String'];
}


export interface QueryCalendarWidgetsArgs {
  hostId: Scalars['ID'];
  startingDate: Scalars['String'];
}


export interface QueryCategoriesArgs {
  keywords?: Maybe<Scalars['String']>;
}


export interface QueryCommissionCodesArgs {
  code?: Maybe<PricingPlan>;
  currencies: Array<CurrencyCode>;
}


export interface QueryDiscountArgs {
  id: Scalars['ID'];
}


export interface QueryEventArgs {
  id: Scalars['ID'];
}


export interface QueryEventSetArgs {
  id: Scalars['ID'];
}


export interface QueryHostArgs {
  id: Scalars['ID'];
}


export interface QueryManageBasicsArgs {
  id: Scalars['ID'];
}


export interface QueryManageCustomizeArgs {
  id: Scalars['ID'];
}


export interface QueryManageCustomizeTicketsArgs {
  id: Scalars['ID'];
  startingDate: Scalars['String'];
}


export interface QueryManageTicketsArgs {
  id: Scalars['ID'];
}


export interface QueryManageWhenRegularEntryArgs {
  id: Scalars['ID'];
}


export interface QueryManageWhenTimedEntryArgs {
  id: Scalars['ID'];
}


export interface QueryOrderArgs {
  id: Scalars['ID'];
}


export interface QueryOrderItemArgs {
  id: Scalars['ID'];
}


export interface QueryOrderItemsArgs {
  id: Scalars['ID'];
}


export interface QueryProfileArgs {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
}


export interface QuerySettlementCurrencyArgs {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
}


export interface QueryTimeSlotSelectArgs {
  id: Scalars['ID'];
}


export interface QueryTimezoneArgs {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
}


export interface QueryTransactionCurrencyArgs {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
}


export interface QueryTransferArgs {
  token: Scalars['String'];
}


export interface QueryUpgradableOrderArgs {
  id: Scalars['ID'];
  orderItemId?: Maybe<Scalars['ID']>;
}

/** A user who is selling tickets to Events on Universe */
export interface Host extends User {
  /** Add on order items */
  addOnOrderItems?: Maybe<OrderItemConnection>;
  /** Account level rates that belong to this host. */
  addOns: AddOnConnection;
  admin: Scalars['Boolean'];
  /** Analytics data for this host (have to be the host or have membership to the host's organization) */
  analytics: Analytics;
  /** A list of all attendees for all Events and all TimeSlots for which this host has sold tickets on Universe. Includes tickets from all states, including invalid. */
  attendees: AttendeeConnection;
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']>;
  /** The user has configured their account as a business - does not have a last name */
  business: Scalars['Boolean'];
  /** The Commission Codes (pricing details) the host is set to for any currency/countries they have sold tickets for - does not include any event or rate specific custom overrides */
  commissionCodes: Array<CommissionCode>;
  /** the settlement currencies of the host (have to be the host or have membership to the host's organization) */
  currencies: Array<CurrencyCode>;
  /** An account level custom report belonging to this host */
  customReport: CustomReport;
  /** All account level custom reports created by this host */
  customReports: CustomReportConnection;
  /** A list of dates with future / ongoing events */
  datesCalendar: Array<Scalars['Date']>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']>;
  /** Account level discounts that belong to this host. Sorted by state (ascending), then code name */
  discounts: DiscountConnection;
  /** Returns calculated all in pricing for a single rate */
  displayPrice?: Maybe<Scalars['Float']>;
  /** The settlement currencies used on events by the host */
  eventCurrencies: Array<CurrencyCode>;
  /** All Events by this host (have to be the host or have membership to the host's organization) */
  events: EventConnection;
  /** All Events (events that have sales) by this host (sorted by live Events (ascending order), then expired / archived events  (have to be the host or have membership to the host's organization). */
  eventsWithTickets: EventConnection;
  /** All non-hidden Events within the given range that were hosted by this user. */
  eventsWithTicketsInRange: EventConnection;
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']>;
  /** Whether the host can choose to pass on Universe service fees to the buyer. */
  forceHostToPayCommission?: Maybe<Scalars['Boolean']>;
  /** Google Analytics Ecommerce */
  googleAnalyticsEcommerce?: Maybe<Scalars['Boolean']>;
  /** Google Analytics Id */
  googleAnalyticsId?: Maybe<Scalars['String']>;
  hasLiveEvents?: Maybe<Scalars['Boolean']>;
  /** Events hosted by this host with past Time Slots sorted by their most recently ended timeslot endAt, unique by Event (have to be the host or have membership to the host's organization) */
  hosted: EventConnection;
  /** Events hosted by this host with future Time Slots (have to be the host or have membership to the host's organization) */
  hosting: EventConnection;
  id?: Maybe<Scalars['ID']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']>;
  /** Orders created for inventory owned by this host */
  orders?: Maybe<OrderConnection>;
  organization: Organization;
  /** Whether the organization has rebate functionality enabled. */
  rebates?: Maybe<Scalars['Boolean']>;
  /** All events for this host ordered by the most recently updated */
  recentlyUpdatedEvents: EventConnection;
  report: Report;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** The seats designer key from Seats.io. Used to embed the seats.io floor plan designer. */
  seatsDesignerKey?: Maybe<Scalars['String']>;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']>;
  /** Events hosted by this host with Time Slots sorted by their starting timeslot startAt */
  sortedEvents: EventConnection;
  /** Linked stripe connect accounts */
  stripeConnectAccounts: Array<Maybe<StripeConnectAccount>>;
  superAdmin: Scalars['Boolean'];
  /** Taxes created by this host */
  taxes?: Maybe<TaxConnection>;
  /** A list of ongoing / future TimeSlots, sorted by startAt, unique by startDate and Event. */
  timeSlotsCalendar: TimeSlotConnection;
  /** The transactional currencies used on events by the host */
  transactionalCurrencies: Array<CurrencyCode>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostAddOnOrderItemsArgs {
  search?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Date']>;
  checkInState?: Maybe<CheckInState>;
  states?: Maybe<Array<OrderItemState>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostAddOnsArgs {
  state?: Maybe<Scalars['String']>;
  listingId?: Maybe<Scalars['ID']>;
  currency?: Maybe<CurrencyCode>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostCustomReportArgs {
  id: Scalars['ID'];
}


/** A user who is selling tickets to Events on Universe */
export interface HostCustomReportsArgs {
  search?: Maybe<Scalars['String']>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostDiscountsArgs {
  search?: Maybe<Scalars['String']>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostDisplayPriceArgs {
  settlementCurrency: Scalars['String'];
  country: Scalars['String'];
  price: Scalars['Float'];
  rateId?: Maybe<Scalars['ID']>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostEventsArgs {
  slugs?: Maybe<Array<Scalars['String']>>;
  currency?: Maybe<CurrencyCode>;
  states?: Maybe<Array<EventState>>;
  search?: Maybe<Scalars['String']>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostEventsWithTicketsArgs {
  currency?: Maybe<CurrencyCode>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  paid?: Maybe<Scalars['Boolean']>;
  free?: Maybe<Scalars['Boolean']>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostEventsWithTicketsInRangeArgs {
  currency?: Maybe<CurrencyCode>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostHostedArgs {
  state?: Maybe<EventState>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostHostingArgs {
  states?: Maybe<Array<EventState>>;
  currency?: Maybe<CurrencyCode>;
  transactionalCurrency?: Maybe<CurrencyCode>;
  slugs?: Maybe<Array<Scalars['String']>>;
  addOnId?: Maybe<Scalars['ID']>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostRecentlyUpdatedEventsArgs {
  states?: Maybe<Array<EventState>>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostReportArgs {
  name?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Maybe<Scalars['String']>>>;
  clauses?: Maybe<Array<Maybe<Scalars['JSON']>>>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostSortedEventsArgs {
  states?: Maybe<Array<EventState>>;
}


/** A user who is selling tickets to Events on Universe */
export interface HostTimeSlotsCalendarArgs {
  date?: Maybe<Scalars['Date']>;
}

/** The most common 'person'-level interface in Universe */
export interface User {
  admin: Scalars['Boolean'];
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']>;
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']>;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']>;
  superAdmin: Scalars['Boolean'];
}

/** Possible roles a user can have */
export enum UserRole {
  /** The user has the default account type */
  User = 'USER',
  /** The user has been marked as a spammer */
  Spammer = 'SPAMMER',
  /** The user has an admin account */
  Admin = 'ADMIN',
  /** The user has a super admin account */
  SuperAdmin = 'SUPER_ADMIN',
  /** The user has a developer account */
  Developer = 'DEVELOPER',
  /** The user has a sales account */
  Sales = 'SALES',
  /** The user has a sales admin account */
  SalesAdmin = 'SALES_ADMIN',
  /** The user has a (tm) finance account */
  Finance = 'FINANCE',
  /** The user has an Agent (call centre) account */
  Agent = 'AGENT'
}

/** Supported locales */
export enum Locale {
  /** English */
  En = 'EN',
  /** Deutsch */
  De = 'DE',
  /** Español */
  Es = 'ES',
  /** Français */
  Fr = 'FR',
  /** Nederlands */
  Nl = 'NL',
  /** Dansk */
  Da = 'DA',
  /** Svenska */
  Sv = 'SV',
  /** Norsk Bokmål */
  Nb = 'NB',
  /** Nederlands (België) */
  NlBe = 'NL_BE',
  /** Ελληνικά */
  El = 'EL',
  /** Suomen kieli */
  Fi = 'FI'
}

/** the organization owned by a particular user */
export interface Organization {
  commissionCode: Scalars['String'];
  /** In UTC */
  createdAt: Scalars['Time'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** In UTC */
  updatedAt: Scalars['Time'];
}



export interface CommissionCode {
  brokerFee: Scalars['Float'];
  code: Scalars['String'];
  country?: Maybe<CountryCode>;
  currency: CurrencyCode;
  flat?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  max?: Maybe<Scalars['Float']>;
  percent?: Maybe<Scalars['Float']>;
}

/** ISO 3166-1 alpha-2 country codes */
export enum CountryCode {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua and Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Angola */
  Ao = 'AO',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland Islands */
  Ax = 'AX',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia and Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** Saint Barthélemy */
  Bl = 'BL',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei Darussalam */
  Bn = 'BN',
  /** Bolivia */
  Bo = 'BO',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos (Keeling) Islands */
  Cc = 'CC',
  /** Congo */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Côte d'Ivoire */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cape Verde */
  Cv = 'CV',
  /** Curaçao */
  Cw = 'CW',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czech Republic */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands (Malvinas) */
  Fk = 'FK',
  /** Micronesia */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Guernsey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia and the South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** Isle of Man */
  Im = 'IM',
  /** India */
  In = 'IN',
  /** Iraq */
  Iq = 'IQ',
  /** Iran */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** Saint Kitts and Nevis */
  Kn = 'KN',
  /** North Korea */
  Kp = 'KP',
  /** South Korea */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Lao */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** Saint Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** Saint Martin */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macao */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** Saint Pierre and Miquelon */
  Pm = 'PM',
  /** Pitcairn */
  Pn = 'PN',
  /** Puerto Rico */
  Pr = 'PR',
  /** Palestine */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Serbia */
  Rs = 'RS',
  /** Russia */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard and Jan Mayen */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** South Sudan */
  Ss = 'SS',
  /** Sao Tome and Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Sint Maarten */
  Sx = 'SX',
  /** Syrian Arab Republic */
  Sy = 'SY',
  /** Swaziland */
  Sz = 'SZ',
  /** Turks and Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad and Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan */
  Tw = 'TW',
  /** Tanzania */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** United States */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vatican City */
  Va = 'VA',
  /** Saint Vincent and the Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** British Virgin Islands */
  Vg = 'VG',
  /** US Virgin Islands */
  Vi = 'VI',
  /** Viet Nam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis and Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Kosovo */
  Xk = 'XK',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW'
}

/** ISO 4217 currency codes */
export enum CurrencyCode {
  /** د.إ AED */
  Aed = 'AED',
  /** ؋ AFN */
  Afn = 'AFN',
  /** L ALL */
  All = 'ALL',
  /** դր. AMD */
  Amd = 'AMD',
  /** ƒ ANG */
  Ang = 'ANG',
  /** Kz AOA */
  Aoa = 'AOA',
  /** $ ARS */
  Ars = 'ARS',
  /** $ AUD */
  Aud = 'AUD',
  /** ƒ AWG */
  Awg = 'AWG',
  /** AZN */
  Azn = 'AZN',
  /** КМ BAM */
  Bam = 'BAM',
  /** $ BBD */
  Bbd = 'BBD',
  /** ৳ BDT */
  Bdt = 'BDT',
  /** лв BGN */
  Bgn = 'BGN',
  /** ب.د BHD */
  Bhd = 'BHD',
  /** Fr BIF */
  Bif = 'BIF',
  /** $ BMD */
  Bmd = 'BMD',
  /** $ BND */
  Bnd = 'BND',
  /** Bs. BOB */
  Bob = 'BOB',
  /** R$ BRL */
  Brl = 'BRL',
  /** $ BSD */
  Bsd = 'BSD',
  /** B⃦ BTC */
  Btc = 'BTC',
  /** Nu. BTN */
  Btn = 'BTN',
  /** P BWP */
  Bwp = 'BWP',
  /** Br BYN */
  Byn = 'BYN',
  /** $ BZD */
  Bzd = 'BZD',
  /** $ CAD */
  Cad = 'CAD',
  /** Fr CDF */
  Cdf = 'CDF',
  /** Fr CHF */
  Chf = 'CHF',
  /** UF CLF */
  Clf = 'CLF',
  /** $ CLP */
  Clp = 'CLP',
  /** ¥ CNY */
  Cny = 'CNY',
  /** $ COP */
  Cop = 'COP',
  /** ₡ CRC */
  Crc = 'CRC',
  /** $ CUC */
  Cuc = 'CUC',
  /** $ CUP */
  Cup = 'CUP',
  /** $ CVE */
  Cve = 'CVE',
  /** Kč CZK */
  Czk = 'CZK',
  /** Fdj DJF */
  Djf = 'DJF',
  /** kr DKK */
  Dkk = 'DKK',
  /** $ DOP */
  Dop = 'DOP',
  /** د.ج DZD */
  Dzd = 'DZD',
  /** ج.م EGP */
  Egp = 'EGP',
  /** Nfk ERN */
  Ern = 'ERN',
  /** Br ETB */
  Etb = 'ETB',
  /** € EUR */
  Eur = 'EUR',
  /** $ FJD */
  Fjd = 'FJD',
  /** £ FKP */
  Fkp = 'FKP',
  /** £ GBP */
  Gbp = 'GBP',
  /** ლ GEL */
  Gel = 'GEL',
  /** GGP */
  Ggp = 'GGP',
  /** ₵ GHS */
  Ghs = 'GHS',
  /** £ GIP */
  Gip = 'GIP',
  /** D GMD */
  Gmd = 'GMD',
  /** Fr GNF */
  Gnf = 'GNF',
  /** Q GTQ */
  Gtq = 'GTQ',
  /** $ GYD */
  Gyd = 'GYD',
  /** $ HKD */
  Hkd = 'HKD',
  /** L HNL */
  Hnl = 'HNL',
  /** kn HRK */
  Hrk = 'HRK',
  /** G HTG */
  Htg = 'HTG',
  /** Ft HUF */
  Huf = 'HUF',
  /** Rp IDR */
  Idr = 'IDR',
  /** ₪ ILS */
  Ils = 'ILS',
  /** IMP */
  Imp = 'IMP',
  /** <U+20B9> INR */
  Inr = 'INR',
  /** ع.د IQD */
  Iqd = 'IQD',
  /** ﷼ IRR */
  Irr = 'IRR',
  /** kr ISK */
  Isk = 'ISK',
  /** £ JEP */
  Jep = 'JEP',
  /** $ JMD */
  Jmd = 'JMD',
  /** د.ا JOD */
  Jod = 'JOD',
  /** ¥ JPY */
  Jpy = 'JPY',
  /** KSh KES */
  Kes = 'KES',
  /** som KGS */
  Kgs = 'KGS',
  /** ៛ KHR */
  Khr = 'KHR',
  /** Fr KMF */
  Kmf = 'KMF',
  /** ₩ KPW */
  Kpw = 'KPW',
  /** ₩ KRW */
  Krw = 'KRW',
  /** د.ك KWD */
  Kwd = 'KWD',
  /** $ KYD */
  Kyd = 'KYD',
  /** 〒 KZT */
  Kzt = 'KZT',
  /** ₭ LAK */
  Lak = 'LAK',
  /** ل.ل LBP */
  Lbp = 'LBP',
  /** ₨ LKR */
  Lkr = 'LKR',
  /** $ LRD */
  Lrd = 'LRD',
  /** L LSL */
  Lsl = 'LSL',
  /** ل.د LYD */
  Lyd = 'LYD',
  /** د.م. MAD */
  Mad = 'MAD',
  /** L MDL */
  Mdl = 'MDL',
  /** Ar MGA */
  Mga = 'MGA',
  /** ден MKD */
  Mkd = 'MKD',
  /** K MMK */
  Mmk = 'MMK',
  /** ₮ MNT */
  Mnt = 'MNT',
  /** P MOP */
  Mop = 'MOP',
  /** UM MRO */
  Mro = 'MRO',
  /** ₨ MUR */
  Mur = 'MUR',
  /** MVR MVR */
  Mvr = 'MVR',
  /** MK MWK */
  Mwk = 'MWK',
  /** $ MXN */
  Mxn = 'MXN',
  /** RM MYR */
  Myr = 'MYR',
  /** MTn MZN */
  Mzn = 'MZN',
  /** $ NAD */
  Nad = 'NAD',
  /** ₦ NGN */
  Ngn = 'NGN',
  /** C$ NIO */
  Nio = 'NIO',
  /** kr NOK */
  Nok = 'NOK',
  /** ₨ NPR */
  Npr = 'NPR',
  /** $ NZD */
  Nzd = 'NZD',
  /** ر.ع. OMR */
  Omr = 'OMR',
  /** B/. PAB */
  Pab = 'PAB',
  /** S/. PEN */
  Pen = 'PEN',
  /** K PGK */
  Pgk = 'PGK',
  /** ₱ PHP */
  Php = 'PHP',
  /** ₨ PKR */
  Pkr = 'PKR',
  /** zł PLN */
  Pln = 'PLN',
  /** ₲ PYG */
  Pyg = 'PYG',
  /** ر.ق QAR */
  Qar = 'QAR',
  /** Lei RON */
  Ron = 'RON',
  /** РСД RSD */
  Rsd = 'RSD',
  /** р. RUB */
  Rub = 'RUB',
  /** FRw RWF */
  Rwf = 'RWF',
  /** ر.س SAR */
  Sar = 'SAR',
  /** $ SBD */
  Sbd = 'SBD',
  /** ₨ SCR */
  Scr = 'SCR',
  /** £ SDG */
  Sdg = 'SDG',
  /** kr SEK */
  Sek = 'SEK',
  /** $ SGD */
  Sgd = 'SGD',
  /** £ SHP */
  Shp = 'SHP',
  /** Le SLL */
  Sll = 'SLL',
  /** Sh SOS */
  Sos = 'SOS',
  /** $ SRD */
  Srd = 'SRD',
  /** Db STD */
  Std = 'STD',
  /** ₡ SVC */
  Svc = 'SVC',
  /** £S SYP */
  Syp = 'SYP',
  /** L SZL */
  Szl = 'SZL',
  /** ฿ THB */
  Thb = 'THB',
  /** ЅМ TJS */
  Tjs = 'TJS',
  /** m TMT */
  Tmt = 'TMT',
  /** د.ت TND */
  Tnd = 'TND',
  /** T$ TOP */
  Top = 'TOP',
  /** TL TRY */
  Try = 'TRY',
  /** $ TTD */
  Ttd = 'TTD',
  /** $ TWD */
  Twd = 'TWD',
  /** Sh TZS */
  Tzs = 'TZS',
  /** ₴ UAH */
  Uah = 'UAH',
  /** USh UGX */
  Ugx = 'UGX',
  /** $ USD */
  Usd = 'USD',
  /** $ UYU */
  Uyu = 'UYU',
  /**  UZS */
  Uzs = 'UZS',
  /** BsF VEF */
  Vef = 'VEF',
  /** ₫ VND */
  Vnd = 'VND',
  /** Vt VUV */
  Vuv = 'VUV',
  /** T WST */
  Wst = 'WST',
  /** Fr XAF */
  Xaf = 'XAF',
  /** ozt XAG */
  Xag = 'XAG',
  /** ozt XAU */
  Xau = 'XAU',
  /** $ XCD */
  Xcd = 'XCD',
  /** SDR XDR */
  Xdr = 'XDR',
  /** Fr XOF */
  Xof = 'XOF',
  /** XPD */
  Xpd = 'XPD',
  /** Fr XPF */
  Xpf = 'XPF',
  /** XPT */
  Xpt = 'XPT',
  /** ﷼ YER */
  Yer = 'YER',
  /** R ZAR */
  Zar = 'ZAR',
  /** ZK ZMK */
  Zmk = 'ZMK',
  /** ZK ZMW */
  Zmw = 'ZMW',
  /** $ ZWL */
  Zwl = 'ZWL'
}

export interface TimeSlotConnection {
  nodes: Array<TimeSlot>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface TimeSlotConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** A range of time with a start and an end, for which tickets are sellable. A single Event may have one or many TimeSlots. For example, a three day Event could be configured either with one TimeSlot (say Friday to Monday), or with three Timeslots (one for each of Friday, Saturday, and Sunday).  */
export interface TimeSlot {
  /** A list of all attendees for the Event, includes tickets from all states, including invalid. */
  attendees: AttendeeConnection;
  /**
   * Available capacity count for Time Slot. Returns null if no capacityAlert or maxQuantity set for Event.
   * @deprecated Prefer using capacityAlert on the Event and state on the TimeSlot to determine if timeslot is FULL.
   */
  availableCapacity?: Maybe<Scalars['Int']>;
  /** In UTC */
  createdAt: Scalars['Time'];
  /** In Event's time zone */
  endAt: Scalars['TimeWithoutTz'];
  /** In Event's time zone */
  endDate: Scalars['Date'];
  /** UNIX Timestamp */
  endStamp: Scalars['Int'];
  event: Event;
  id: Scalars['ID'];
  /** Orders created for this Event */
  orders: OrderConnection;
  /** Rate capacities for the Event */
  rateCapacities: RateCapacityConnection;
  rates?: Maybe<Array<Rate>>;
  report: Report;
  /** Future or ongoing TimeSlots for the same Event within the same day */
  sameDayTimeSlots: TimeSlotConnection;
  /** In Event's time zone */
  startAt: Scalars['TimeWithoutTz'];
  /** In Event's time zone */
  startDate: Scalars['Date'];
  /** UNIX Timestamp */
  startStamp: Scalars['Int'];
  state: TimeSlotState;
  timeSlotReport: TimeSlotReport;
  /** An IANA Time Zone string */
  tz: Scalars['String'];
  /** In UTC */
  updatedAt: Scalars['Time'];
}


/** A range of time with a start and an end, for which tickets are sellable. A single Event may have one or many TimeSlots. For example, a three day Event could be configured either with one TimeSlot (say Friday to Monday), or with three Timeslots (one for each of Friday, Saturday, and Sunday).  */
export interface TimeSlotReportArgs {
  name?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Maybe<Scalars['String']>>>;
  clauses?: Maybe<Array<Maybe<Scalars['JSON']>>>;
}

/** The state an Event can be in */
export enum TimeSlotState {
  /** No valid tickets have been sold for the event */
  Unbooked = 'UNBOOKED',
  /** The event has valid tickets associated with it */
  Normal = 'NORMAL',
  /** The event is sold out, no capacity remains */
  Full = 'FULL',
  /** The event has been removed */
  Hidden = 'HIDDEN'
}


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export interface Event extends BaseEvent {
  /** Access Keys created for this Event */
  accessKeys?: Maybe<AccessKeyConnection>;
  /** Event has sold tickets for timeslots in the future */
  active: Scalars['Boolean'];
  /** Add-on sales by day */
  addOnSalesByDay: Array<DailySales>;
  addOns: Array<Maybe<AddOn>>;
  /** Optional additional images for the event (promotional photos, venue photos) */
  additionalImages: Array<Image>;
  /** Street-level address */
  address: Scalars['String'];
  /** All future or ongoing TimeSlots for which tickets can be purchased */
  allAvailableTimeSlots: Array<Maybe<TimeSlot>>;
  /** All Additional Images */
  allImages: Array<Image>;
  /** All dates/times for which tickets can be purchased sorted chronologically. Each Event can define one or many TimeSlots */
  allTimeSlots: Array<Maybe<TimeSlot>>;
  /** Whether to enable waitlist for the Event */
  allowWaitlist: Scalars['Boolean'];
  /** A list of all attendees for the Event, includes tickets from all states, including invalid. */
  attendees: AttendeeConnection;
  /** A list of countries in which tickets to this event may be purchased */
  availableCountries: Array<Maybe<CountryCode>>;
  /** Future or ongoing TimeSlots for which tickets can be purchased */
  availableTimeSlots: TimeSlotConnection;
  /** Total event capacity of the event */
  capacity?: Maybe<Scalars['Int']>;
  /** Whether to show an alert that the Event is almost sold out */
  capacityAlert?: Maybe<Scalars['Boolean']>;
  /** The category assigned for this Event */
  category?: Maybe<Category>;
  /** Seats chart information regarding if the listing's chart is in a DRAFT state and if its events have yet been linked */
  chartStatus?: Maybe<Scalars['JSON']>;
  /** Name of the city */
  cityName?: Maybe<Scalars['String']>;
  /** Optional field that the host sets for additional contact information */
  contactDetails?: Maybe<Scalars['String']>;
  /** Cover photo for the event (min 100x100px, max 2MB). Auto-generated if no initial entry. */
  coverPhoto: Image;
  /** In UTC */
  createdAt: Scalars['Time'];
  /** The currency specified by Host */
  currency: CurrencyCode;
  /** A detailed description of the event */
  description: Scalars['String'];
  /** Discounts created for this Event */
  discounts?: Maybe<DiscountConnection>;
  /** Event photo for the event (min 1110x444px, max 5MB). Auto-generated if no initial entry. */
  eventPhoto: Image;
  /** The number of future time slots */
  futureTimeSlotCount: Scalars['Int'];
  /** Total sales amount for future timeslots only (returns null if no future timeslots) */
  futureTimeslotsSalesAmount?: Maybe<Money>;
  /** Total tickets sold for upcoming timeslots only (returns null if no future timeslots) */
  futureTimeslotsTicketsSold?: Maybe<Scalars['Int']>;
  /** The ticket purchase button text */
  getTicketsText: Scalars['String'];
  /** the 'send_to' field for a GoogleAds conversion to be tracked. Has the form: AW-123456789/AbC-D_efG-h12_34-567 */
  googleAdsSendTos?: Maybe<GoogleAdsSendTos>;
  /** Whether the Event is sells Passes */
  hasPasses: Scalars['Boolean'];
  /** Whether the Event uses reserved seating */
  hasSeats: Scalars['Boolean'];
  /** A user-configurable setting determining whether the TimeSlot of the Event should be disclosed to the Buyer */
  hiddenDate: Scalars['Boolean'];
  /** Whether to show or hide this Event from our Calendar / Listings widgets. */
  hideFromWidgets?: Maybe<Scalars['Boolean']>;
  host: Host;
  id: Scalars['ID'];
  /** A URL to the event image. Custom height and width can be supplied */
  imageUrl?: Maybe<Scalars['String']>;
  /** Other Images */
  images: ImageConnection;
  /** Date that the event was last updated */
  lastUpdated: Scalars['Date'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  /** Maximum Price of an event. If provided, indicates a range */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Maximum number of items which are sellable for Event.The value depends on Rates' maxQuantity. */
  maxQuantity?: Maybe<Scalars['Int']>;
  /** Minimum Price of an event */
  minPrice?: Maybe<Scalars['Float']>;
  /** The next active time slot of future time slots */
  nextFutureTimeSlot?: Maybe<TimeSlot>;
  /** Orders created for this Event */
  orders?: Maybe<OrderConnection>;
  /** Whether payment plans are disabled for this listing */
  paymentPlanDisabled: Scalars['Boolean'];
  paymentSettings: PaymentSettings;
  /** The privacy setting for the Event */
  privacy: EventPrivacy;
  /** Content that will be provided to buyer's only */
  privateNote?: Maybe<Scalars['String']>;
  /** When the draft event is scheduled to be published (not set if not scheduled) */
  publishLaterAt?: Maybe<Scalars['Time']>;
  /** Listing questions on checkout */
  questions: Array<Maybe<Question>>;
  rateStateExists: RateStateExists;
  /** Product types (Tickets or Passes) that can be sold for this Event */
  rates: RateConnection;
  /** Whether the Event uses rebates */
  rebates: Scalars['Boolean'];
  /** Time (in seconds) setting how long refunds are available for - pairs with refundOffsetType */
  refundOffset: Scalars['Int'];
  /** Refund will be available either within refundOffset units of purchase or until refundOffset units before the event */
  refundOffsetType: Scalars['String'];
  /** Describes a policy on ticket refunds */
  refundPolicy?: Maybe<RefundPolicy>;
  /** Region where the event is being hosted */
  region?: Maybe<Scalars['String']>;
  report: Report;
  /** Total sales amount for this Event */
  salesAmount?: Maybe<Money>;
  /** Sales by day */
  salesByDay: Array<DailySales>;
  /** Whether the Event Saved by the Viewer */
  saved: Scalars['Boolean'];
  /** List of all Savers who saved the Event */
  savers?: Maybe<SaversConnection>;
  /** The schedules assigned to this Event */
  schedules?: Maybe<ScheduleConnection>;
  /** Whether the Seats.io chart has been published for its first time */
  seatingMapPublished: Scalars['Boolean'];
  /** The seats chart key from Seats.io */
  seatsChartKey?: Maybe<Scalars['String']>;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug: Scalars['String'];
  /** A parameterized version of slug used for URI construction */
  slugParam: Scalars['String'];
  /** Whether the Social Buttons will be active on unlisted events */
  socialButtons: Scalars['Boolean'];
  /** Tickets are sold out for this Event */
  soldOut: Scalars['Boolean'];
  /** The Event state */
  state: EventState;
  /** The tags added to this Event */
  tags: Array<Maybe<Tag>>;
  /** Ticket sales by day */
  ticketSalesByDay: Array<DailySales>;
  /** Total tickets sold for this Event */
  ticketsSold?: Maybe<Scalars['Int']>;
  timeSlotReport: TimeSlotReport;
  /** A date/time for which tickets can be purchased sorted chronologically. Each Event can define one or many TimeSlots */
  timeSlots: TimeSlotConnection;
  /** Determines whether or not an event admits visitors to an event between a set time */
  timedEntry: Scalars['Boolean'];
  /** Timezone of the event location */
  timezone: Scalars['String'];
  /** A brief description */
  title: Scalars['String'];
  /** Currency that is displayed and charged in */
  transactionCurrency: CurrencyCode;
  /** The total number of tickets which are sellable for upcoming TimeslotsThe value is the lowest of the upcoming Rates maxQuantity and upcoming Timeslots capacities */
  upcomingTotalCapacity?: Maybe<Scalars['Int']>;
  /** In UTC */
  updatedAt: Scalars['Time'];
  /** Event URL */
  url: Scalars['String'];
  /** Event or EventSet creator */
  user: Profile;
  /** Name of the venue */
  venueName?: Maybe<Scalars['String']>;
  /** Is the event virtual? */
  virtual: Scalars['Boolean'];
  /** Virtual connection info */
  virtualInfo: Scalars['String'];
}


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export interface EventAddOnSalesByDayArgs {
  from: Scalars['Date'];
  to: Scalars['Date'];
}


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export interface EventAttendeesArgs {
  after?: Maybe<Scalars['Time']>;
  before?: Maybe<Scalars['Time']>;
  externalMetadata?: Maybe<Scalars['String']>;
  state?: Maybe<OrderItemState>;
  timeSlotIds?: Maybe<Array<Scalars['ID']>>;
  match?: Maybe<Scalars['String']>;
}


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export interface EventDescriptionArgs {
  format?: Maybe<ContentFormat>;
}


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export interface EventImageUrlArgs {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
}


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export interface EventOrdersArgs {
  state?: Maybe<OrderState>;
  paymentMethod?: Maybe<PaymentMethod>;
  timeSlotIds?: Maybe<Array<Scalars['ID']>>;
  match?: Maybe<Scalars['String']>;
}


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export interface EventPrivateNoteArgs {
  format?: Maybe<ContentFormat>;
}


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export interface EventRatesArgs {
  states?: Maybe<Array<RateState>>;
  clientGroups?: Maybe<Array<RateClientGroup>>;
}


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export interface EventReportArgs {
  name?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Maybe<Scalars['String']>>>;
  clauses?: Maybe<Array<Maybe<Scalars['JSON']>>>;
}


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export interface EventSalesByDayArgs {
  from: Scalars['Date'];
  to: Scalars['Date'];
}


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export interface EventTicketSalesByDayArgs {
  from: Scalars['Date'];
  to: Scalars['Date'];
}


/** The root-level inventory object. Events are entitites for which tickets can be sold. Events support multiple dates/times for which tickets can be sold separately as TimeSlots. In previous APIs, Universe has referred to this as a Listing. */
export interface EventTimeSlotsArgs {
  ids?: Maybe<Array<Scalars['String']>>;
  startTimeBefore?: Maybe<Scalars['Date']>;
  startTimeAfter?: Maybe<Scalars['Date']>;
  endTimeBefore?: Maybe<Scalars['Date']>;
  endTimeAfter?: Maybe<Scalars['Date']>;
}

/** The most low level version of an event, representing both events and event sets */
export interface BaseEvent {
  /** Street-level address */
  address: Scalars['String'];
  /** All Additional Images */
  allImages: Array<Image>;
  /** Cover Photo */
  coverPhoto: Image;
  /** A detailed description of the event */
  description: Scalars['String'];
  id: Scalars['ID'];
  /** Other Images */
  images: ImageConnection;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug: Scalars['String'];
  /** A brief description */
  title: Scalars['String'];
  /** Event or EventSet creator */
  user: Profile;
  /** Name of the venue */
  venueName?: Maybe<Scalars['String']>;
}


/** The most low level version of an event, representing both events and event sets */
export interface BaseEventDescriptionArgs {
  format?: Maybe<ContentFormat>;
}

/** Supported content formats. */
export enum ContentFormat {
  Text = 'TEXT',
  Html = 'HTML'
}

/** A Profile for a Universe account - an interface into a User as a Host or Buyer */
export interface Profile extends User {
  admin: Scalars['Boolean'];
  /** Public-visibility Events in the past associated with Orders purchased by this account */
  attended?: Maybe<EventConnection>;
  /** Public-visiblity Events in the future associated with Orders purchased by this account */
  attending?: Maybe<EventConnection>;
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']>;
  /** The Profile is for a user who has configured their account as a business */
  business?: Maybe<Scalars['Boolean']>;
  /** The cover photo URL in the original size */
  coverPhotoUrl?: Maybe<Scalars['String']>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']>;
  /** Facebook account URI */
  facebook?: Maybe<Scalars['String']>;
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']>;
  /** The Profile is for a user hosting events on Universe */
  host?: Maybe<Scalars['Boolean']>;
  /** Public-visibility Events with no future Time Slots hosted by this account */
  hosted?: Maybe<EventConnection>;
  /** Public-visibility Events with future Time Slots hosted by this account */
  hosting?: Maybe<EventConnection>;
  id?: Maybe<Scalars['ID']>;
  /** Instagram account URI */
  instagram?: Maybe<Scalars['String']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** A plain-text user-inputed string referring to their self-defined location */
  location?: Maybe<Scalars['String']>;
  /** Determines if a user is messageable */
  messageable?: Maybe<Scalars['Boolean']>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']>;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']>;
  superAdmin: Scalars['Boolean'];
  /** Twitter account URI */
  twitter?: Maybe<Scalars['String']>;
  /** The Profile URI */
  url: Scalars['String'];
  visibility: ProfileVisibility;
  /** A stringified URI, user-inputed */
  website?: Maybe<Scalars['String']>;
}

/** Possible visibility states a Profile can be in */
export enum ProfileVisibility {
  /** Public (recommended) */
  Public = 'PUBLIC',
  /** Hidden from search engines */
  Hidden = 'HIDDEN',
  /** Private */
  Private = 'PRIVATE'
}

export interface EventConnection {
  nodes: Array<Event>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface EventConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


/** Image for events, avatars, and add on options */
export interface Image {
  cropHeight?: Maybe<Scalars['Int']>;
  cropWidth?: Maybe<Scalars['Int']>;
  cropX?: Maybe<Scalars['Int']>;
  cropY?: Maybe<Scalars['Int']>;
  isGif?: Maybe<Scalars['Boolean']>;
  uploadId: Scalars['String'];
  /** Image URL. Custom height and width can be supplied */
  url: Scalars['String'];
}


/** Image for events, avatars, and add on options */
export interface ImageUrlArgs {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  blur?: Maybe<Scalars['Int']>;
  quality?: Maybe<ImageQuality>;
  format?: Maybe<ImageFormat>;
  cropMode?: Maybe<ImageCropMode>;
}

/** Adjust image quality. Works with JPEG and WEBP formats. */
export enum ImageQuality {
  /** ≈50% file size compared to 'NORMAL' */
  Lightest = 'LIGHTEST',
  /** ≈80% file size */
  Lighter = 'LIGHTER',
  /** ≈100% file size */
  Normal = 'NORMAL',
  /** ≈125% file size */
  Better = 'BETTER',
  /** ≈170% file size */
  Best = 'BEST'
}

/** Supported output formats. */
export enum ImageFormat {
  Jpeg = 'JPEG',
  Png = 'PNG',
  Webp = 'WEBP'
}

/** Set the image crop mode. */
export enum ImageCropMode {
  /** Resize Image Proportionally */
  Preview = 'PREVIEW',
  /** Resize Image */
  Resize = 'RESIZE',
  /** Crop Image */
  Crop = 'CROP',
  /** Downscale and Crop Image */
  ScaleCrop = 'SCALE_CROP'
}

export interface ImageConnection {
  nodes: Array<Image>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface ImageConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** The privacy setting for an Event */
export enum EventPrivacy {
  /** The default privacy setting - publicly searchable */
  Public = 'PUBLIC',
  /** The Event is private, not publicly searchable */
  Private = 'PRIVATE'
}

/** The Event state determines whether Orders can be created (assuming available inventory). To be sellable, the Event MUST be in the POSTED state. */
export enum EventState {
  /** The Event is not complete, default state */
  Draft = 'DRAFT',
  /** The Event is complete, but the Host's account has not been confirmed (i.e. email ownership has been confirmed) */
  Presumbitted = 'PRESUMBITTED',
  /** The Event is complete, and available to sell tickets for */
  Posted = 'POSTED',
  Expired = 'EXPIRED',
  Archived = 'ARCHIVED',
  /** The Event has been disabled by a moderator */
  Declined = 'DECLINED',
  Inactive = 'INACTIVE'
}

/** Settings related to means of payment on an Event. */
export interface PaymentSettings {
  /** Payment methods available to pay for an Order. */
  methodsAvailable: Array<PaymentMethod>;
  /** Payment methods available to pay for an Order. */
  methodsEnabled: Array<PaymentMethod>;
  /** Sales can be performed where the Credit Card payment method only accepts specific card brands (i.e. an Amex only presale). If empty, there are no restrictions. Note that these brand restrictions will only be applied to the Credit Card payment method. If other payment methods are enabled on the Event, they will not be brand restricted. */
  restrictedCardBrands: Array<CardBrand>;
  /** Security methods available to pay for an Order. */
  securityMethodsAvailable: Array<PaymentMethod>;
  /** Security methods enabled to pay for an Order. */
  securityMethodsEnabled: Array<PaymentMethod>;
}

export enum PaymentMethod {
  Alipay = 'ALIPAY',
  Bancontact = 'BANCONTACT',
  Eps = 'EPS',
  Giropay = 'GIROPAY',
  Globee = 'GLOBEE',
  Ideal = 'IDEAL',
  Klarna = 'KLARNA',
  Invoice = 'INVOICE',
  Masterpass = 'MASTERPASS',
  Multibanco = 'MULTIBANCO',
  Sepa = 'SEPA',
  Sofort = 'SOFORT',
  Przelewy = 'PRZELEWY',
  Wechat = 'WECHAT',
  Visacheckout = 'VISACHECKOUT',
  Offline = 'OFFLINE',
  Card = 'CARD'
}

/** Credit Card brands supported by our payment systems */
export enum CardBrand {
  AmericanExpress = 'AMERICAN_EXPRESS',
  DinersClub = 'DINERS_CLUB',
  Discover = 'DISCOVER',
  Jcb = 'JCB',
  Mastercard = 'MASTERCARD',
  Unionpay = 'UNIONPAY',
  Visa = 'VISA',
  Unknown = 'UNKNOWN'
}

/** Rule describing when ticket refunds should be allowed */
export interface RefundPolicy {
  offset: RefundOffset;
  type: RefundOffsetType;
}

/** What is the time of your refund policy? */
export enum RefundOffset {
  /** Your refund policy will affect 1 day */
  OneDay = 'ONE_DAY',
  /** Your refund policy will affect 2 days */
  TwoDays = 'TWO_DAYS',
  /** Your refund policy will affect 3 days */
  ThreeDays = 'THREE_DAYS',
  /** Your refund policy will affect 7 days */
  OneWeek = 'ONE_WEEK',
  /** Your refund policy will affect 30 days */
  ThirtyDays = 'THIRTY_DAYS',
  /** Your refund policy will affect 60 days */
  SixtyDays = 'SIXTY_DAYS',
  /** Your refund policy will affect 90 days */
  NinetyDays = 'NINETY_DAYS',
  /** Tickets can never be refunded */
  Never = 'NEVER'
}

/** What is the scope of your refund policy? */
export enum RefundOffsetType {
  /** Your refund policy will be calculated from the event date */
  Event = 'EVENT',
  /** Your refund policy will be calculated from the ticket purchase date */
  Purchase = 'PURCHASE'
}

export interface AttendeeConnection {
  nodes: Array<Attendee>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface AttendeeConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** A ticket-holder */
export interface Attendee {
  /** Attendee-speicific answers to checkout questions on the OrderItem level (i.e. Ticket) */
  answers: Array<Maybe<Answer>>;
  email: Scalars['String'];
  /** The Event the attendee is attending */
  event: Event;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  /** The Order which generated this attendee */
  order: Order;
  /** The individual OrderItem on the Order which is for this attendee */
  orderItem: OrderItem;
  /** Typically, the ticket-type belonging to the attendee. */
  rate: Rate;
  /** The state of the Order this attendee's ticket was purchased via - note, importantly, that this can be an invalid state. If you are using this information to validate a guest list, you should filter your results for only those tickets you consider valid. */
  state: OrderItemState;
  /** The TimeSlot of the Event the attendee is attending */
  timeSlot: TimeSlot;
  /** The token that the individual will present in order to gain access to the event. Typically in the form of a QRCode. */
  token: Scalars['String'];
}

/** OrderItemState describes the possible states an OrderItem may be in. */
export enum OrderItemState {
  /** The OrderItem has been created and a charge has been authorized but not yet processed - the default state */
  Unpaid = 'UNPAID',
  /** The OrderItem has been created, but requires approval by the Host to process */
  Unapproved = 'UNAPPROVED',
  /** This state has been deprecated, and will be removed soon */
  Checkout = 'CHECKOUT',
  /** The OrderItem has been created but a charge has not yet been authorized */
  Pending = 'PENDING',
  /** The OrderItem has been successfully processed, and payment methods have been charged */
  Paid = 'PAID',
  /** The OrderItem has been processed, and processing failed */
  Failed = 'FAILED',
  /** The OrderItem has been processed, but the payment method was declined by the upstream gateway */
  Declined = 'DECLINED',
  /** The OrderItem was created and processed, but has since been cancelled and any associated transactions have been reverted */
  Cancelled = 'CANCELLED',
  /** The OrderItem was created and processed, and 48 hours has passed since the Event. The funds associated with this OrderItem are now pending a transfer to the Host */
  Ended = 'ENDED',
  /** The OrderItem has been processed, and funds captured by the charge have been transferred to the Event Host */
  Closed = 'CLOSED',
  /** The OrderItem was created but not processed for any reason, and can no longer be processed because the Event has happened */
  Expired = 'EXPIRED',
  /** The OrderItem could not be processed due to internal service disruption inside of */
  Error = 'ERROR',
  /** The OrderItem has been processed and processed, but an outstanding balance remainds. This state is used specifically for our Payment Plans product. In general, exercise care in dealing with OrderItems in this state, because a default on future payments remains possible. */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** The OrderItem was created and, but requires authorizeation by the Buyer. */
  Unauthorized = 'UNAUTHORIZED',
  /** The OrderItem was created and was transferred to another buyer. */
  Transferred = 'TRANSFERRED',
  /** The OrderItem was created and was upgraded to a new ticket type. This OrderItem is no longer valid for entry. */
  Upgraded = 'UPGRADED'
}

/** Rates are product types available for sale - most typically these are tickets, but they are also configurable as Passes, and in the future other meta product types may be added */
export interface Rate {
  /** Optional capacity for this rate */
  capacity?: Maybe<Scalars['Int']>;
  clientGroup: RateClientGroup;
  /** Optional description for this rate */
  description?: Maybe<Scalars['String']>;
  /** Displays a price that contains taxes and fees if the listing has all-in pricing enabled. If the listing does not have it enabled, this is identical to price. */
  displayPrice: Scalars['Float'];
  endStamp?: Maybe<Scalars['Int']>;
  exclusionRules?: Maybe<Array<Scalars['JSON']>>;
  id: Scalars['ID'];
  /** A limit of the number of tickets of this type sellable for each TimeSlot on an Event */
  maxQuantity?: Maybe<Scalars['Int']>;
  /** Optional amount of maximum tickets allowed when purchasing this rate */
  maxTickets?: Maybe<Scalars['Int']>;
  /** The minimum price of this type of ticket, used only in PWYW/donation tickets */
  minPrice: Scalars['Float'];
  /** Optional amount of minimum tickets required when purchasing this rate */
  minTickets?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  optionName?: Maybe<Scalars['String']>;
  /** Confirmed OrderItems in the Order, don't include transfers */
  orderItems: OrderItemConnection;
  /** The price of this type of ticket - 0.0 if free */
  price: Scalars['Float'];
  /** Time (in seconds) setting when purchased orders on this rate will be released to the fan */
  releaseOffset?: Maybe<Scalars['Int']>;
  /** Total net sales */
  sales: Money;
  /**
   * Total net sales amount
   * @deprecated Use new 'sales' field for more detail
   */
  salesAmount: Scalars['Float'];
  startStamp?: Maybe<Scalars['Int']>;
  state: RateState;
  /** Rate type I.E Ticket, Pass, or Add-on */
  type?: Maybe<RateType>;
}

/** The state a rate can be in */
export enum RateState {
  /** The rate is available for purchase, if capacity is available */
  Active = 'ACTIVE',
  /** The rate is only available if the user provides a key */
  Locked = 'LOCKED',
  Inactive = 'INACTIVE',
  /** The rate has been removed */
  Hidden = 'HIDDEN'
}

/** A state representing which places a rate can be sold. */
export enum RateClientGroup {
  /** The rate can be sold both online and at-the-door */
  Everywhere = 'EVERYWHERE',
  /** The rate can only be sold online */
  OnlineOnly = 'ONLINE_ONLY',
  /** The rate can only be sold at the door */
  AtTheDoor = 'AT_THE_DOOR'
}

export interface OrderItemConnection {
  nodes: Array<OrderItem>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface OrderItemConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** An item in the order */
export interface OrderItem {
  /** The AddOn for this OrderItem, if the rate is an AddOnRate */
  addOn?: Maybe<AddOn>;
  amount: Scalars['Float'];
  /** Buyer's answers to checkout questions on the OrderItem level (i.e. Ticket) */
  answers: Array<Maybe<Answer>>;
  /** The person that owns this OrderItem, who is not always the primary buyer */
  buyer: Buyer;
  /** Whether or not the OrderItem was scanned in */
  checkInState: CheckInState;
  /** Whether this order item is in a confirmed state */
  confirmed?: Maybe<Scalars['Boolean']>;
  /** Cost breakdown for the Order Item */
  costBreakdown: OrderCostItemBreakdown;
  /** In UTC */
  createdAt: Scalars['Time'];
  /** Partially refunded amount */
  discountPrice?: Maybe<Scalars['Float']>;
  /** Redemption objects for any Discount applied during checkout */
  discountRedemption?: Maybe<DiscountRedemption>;
  /** Whether there are questions or answers on this order item that can be edited */
  editable?: Maybe<Scalars['Boolean']>;
  /** Custom attribute associated with this OrderItem, settable by the Host */
  externalMetadata?: Maybe<Scalars['String']>;
  /** Users first name */
  firstName?: Maybe<Scalars['String']>;
  /** Determines if the OrderItem has been fully refunded, meaning the entire monetary amount has been returned to the buyer */
  fullyRefunded?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Users first name */
  lastName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  optionName?: Maybe<Scalars['String']>;
  /** The parent transaction for this Order Item */
  order: Order;
  /** The state the Order is in */
  orderState: OrderState;
  /** Determines if the OrderItem has been partially refunded. Partially refunded meaning a partial monetary amount has been returned to the buyer */
  partiallyRefunded?: Maybe<Scalars['Boolean']>;
  /** The person that paid for this OrderItem, but does not necessarily own it */
  primaryBuyer: Buyer;
  qrCode?: Maybe<Scalars['String']>;
  /** The rate associated with this OrderItem */
  rate: Rate;
  /** The label of the seat if the Event sells seats */
  seatLabel?: Maybe<Scalars['String']>;
  /** The state the OrderItem is in */
  state: OrderItemState;
  /** In UTC */
  updatedAt: Scalars['Time'];
  /** Whether this order item can be upgraded */
  upgradeable?: Maybe<Scalars['Boolean']>;
  /** Whether this order item can be voided */
  voidable: Scalars['Boolean'];
}

/** OrderState describes the possible states an Order may be in. */
export enum OrderState {
  /** The Order has been created and a charge has been authorized but not yet processed - the default state */
  Unpaid = 'UNPAID',
  /** The Order has been created, but requires approval by the Host to process */
  Unapproved = 'UNAPPROVED',
  /** This state has been deprecated, and will be removed soon */
  Checkout = 'CHECKOUT',
  /** The Order has been created but a charge has not yet been authorized */
  Pending = 'PENDING',
  /** The Order has been successfully processed, and payment methods have been charged */
  Paid = 'PAID',
  /** The Order has been processed, and processing failed */
  Failed = 'FAILED',
  /** The Order has been processed, but the payment method was declined by the upstream gateway */
  Declined = 'DECLINED',
  /** The Order was created and processed, but has since been cancelled and any associated transactions have been reverted */
  Cancelled = 'CANCELLED',
  /** The Order was created and processed, and 48 hours has passed since the Event. The funds associated with this Order are now pending a transfer to the Host */
  Ended = 'ENDED',
  /** The Order has been processed, and funds captured by the charge have been transferred to the Event Host */
  Closed = 'CLOSED',
  /** The Order was created but not processed for any reason, and can no longer be processed because the Event has happened */
  Expired = 'EXPIRED',
  /** The Order could not be processed due to internal service disruption inside of */
  Error = 'ERROR',
  /** The Order has been processed and processed, but an outstanding balance remainds. This state is used specifically for our Payment Plans product. In general, exercise care in dealing with Orders in this state, because a default on future payments remains possible. */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** The Order was created and, but requires authorizeation by the Buyer. */
  Unauthorized = 'UNAUTHORIZED',
  /** The Order was disputed. Ticket is invalid for entry, but counts towards capacity until resolved. */
  Disputed = 'DISPUTED'
}

/** An order item cost breakdown */
export interface OrderCostItemBreakdown {
  /** The total commission paid for this Order */
  commission?: Maybe<Scalars['Float']>;
  /** The total commission included paid for this Order */
  commissionIncluded?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
  /** The currency used either for transactions or for settlement */
  currency?: Maybe<CurrencyCode>;
  description?: Maybe<Scalars['String']>;
  /** The total discount for this Order */
  discount?: Maybe<Scalars['Float']>;
  /** The total fees paid for this Order */
  fee?: Maybe<Scalars['Float']>;
  fees?: Maybe<Array<CostItemBreakdownFee>>;
  /** The total fulfillment paid for this Order */
  fulfillment?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  mongoId?: Maybe<Scalars['String']>;
  /** The total payment for this Order */
  payment?: Maybe<Scalars['Float']>;
  /** The plan fees paid for this Order */
  planFee?: Maybe<Scalars['Float']>;
  /** The price paid for this Order */
  price?: Maybe<Scalars['Float']>;
  rateId?: Maybe<Scalars['String']>;
  /** The settlement cost breakdown */
  settlement?: Maybe<OrderCostBreakdown>;
  /** The subtotal paid for this Order */
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Array<CostItemBreakdownTax>>;
  /** The total taxes paid for this Order */
  taxesTotal?: Maybe<Scalars['Float']>;
  /** The transactional cost breakdown */
  transactional?: Maybe<OrderCostBreakdown>;
  /** Has this Order Item been voided */
  voided?: Maybe<Scalars['Boolean']>;
  /** The total commission voided for this Order */
  voidedCommission?: Maybe<Scalars['Float']>;
  /** The total commission included voided for this Order */
  voidedCommissionIncluded?: Maybe<Scalars['Float']>;
  /** The total discount voided for this Order */
  voidedDiscount?: Maybe<Scalars['Float']>;
  /** The total fees voided for this Order */
  voidedFee?: Maybe<Scalars['Float']>;
  voidedFees?: Maybe<Array<CostItemBreakdownFee>>;
  /** The total payment voided for this Order */
  voidedPayment?: Maybe<Scalars['Float']>;
  /** The plan fees voided for this Order */
  voidedPlanFee?: Maybe<Scalars['Float']>;
  /** The price voided for this Order */
  voidedPrice?: Maybe<Scalars['Float']>;
  /** The subtotal voided for this Order */
  voidedSubtotal?: Maybe<Scalars['Float']>;
  voidedTaxes?: Maybe<Array<CostItemBreakdownTax>>;
  /** The total taxes voided for this Order */
  voidedTaxesTotal?: Maybe<Scalars['Float']>;
}

export interface CostItemBreakdownTax {
  amount?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Float']>;
  /** The settlement cost breakdown */
  settlement?: Maybe<CostItemBreakdownTax>;
  taxId?: Maybe<Scalars['String']>;
  /** The transactional cost breakdown */
  transactional?: Maybe<CostItemBreakdownTax>;
}

export interface CostItemBreakdownFee {
  amount?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  flat?: Maybe<Scalars['Float']>;
  percent?: Maybe<Scalars['Float']>;
  /** The settlement cost breakdown */
  settlement?: Maybe<CostItemBreakdownFee>;
  src_flat?: Maybe<Scalars['Float']>;
  /** The transactional cost breakdown */
  transactional?: Maybe<CostItemBreakdownFee>;
}

/** An order cost breakdown by default, the transactional cost breakdown */
export interface OrderCostBreakdown {
  /** The total commission paid for this Order */
  commission?: Maybe<Scalars['Float']>;
  /** The total commission included paid for this Order */
  commissionIncluded?: Maybe<Scalars['Float']>;
  /** The currency used either for transactions or for settlement */
  currency: CurrencyCode;
  /** The total discount for this Order */
  discount?: Maybe<Scalars['Float']>;
  /** The total fees paid for this Order */
  fee?: Maybe<Scalars['Float']>;
  /** The fees paid for this Order */
  fees?: Maybe<Array<CostBreakdownItem>>;
  /** The total fulfillment paid for this Order */
  fulfillment?: Maybe<Scalars['Float']>;
  /** The total payment for this Order */
  payment?: Maybe<Scalars['Float']>;
  /** The date the payment was made at for this Order */
  paymentMadeAt: Scalars['String'];
  /** The plan fees paid for this Order */
  planFee?: Maybe<Scalars['Float']>;
  /** The price paid for this Order */
  price?: Maybe<Scalars['Float']>;
  /** The settlement cost breakdown */
  settlement?: Maybe<OrderCostBreakdown>;
  /** The subtotal paid for this Order */
  subtotal?: Maybe<Scalars['Float']>;
  /** The taxes paid for this Order */
  taxes?: Maybe<Array<CostBreakdownItem>>;
  /** The total taxes paid for this Order */
  taxesTotal?: Maybe<Scalars['Float']>;
  /** The transactional cost breakdown */
  transactional?: Maybe<OrderCostBreakdown>;
  /** The total commission voided for this Order */
  voidedCommission?: Maybe<Scalars['Float']>;
  /** The total commission included voided for this Order */
  voidedCommissionIncluded?: Maybe<Scalars['Float']>;
  /** The total discount voided for this Order */
  voidedDiscount?: Maybe<Scalars['Float']>;
  /** The total fees voided for this Order */
  voidedFee?: Maybe<Scalars['Float']>;
  /** The fees that were voided on this Order */
  voidedFees?: Maybe<Array<CostBreakdownItem>>;
  /** The total payment voided for this Order */
  voidedPayment?: Maybe<Scalars['Float']>;
  /** The date the payment was voided at */
  voidedPaymentAt: Scalars['String'];
  /** The plan fees voided for this Order */
  voidedPlanFee?: Maybe<Scalars['Float']>;
  /** The price voided for this Order */
  voidedPrice?: Maybe<Scalars['Float']>;
  /** The subtotal voided for this Order */
  voidedSubtotal?: Maybe<Scalars['Float']>;
  /** The taxes that were voided on this Order */
  voidedTaxes?: Maybe<Array<CostBreakdownItem>>;
  /** The total taxes voided for this Order */
  voidedTaxesTotal?: Maybe<Scalars['Float']>;
}

export interface CostBreakdownItem {
  amount?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  /** The settlement cost breakdown */
  settlement?: Maybe<CostBreakdownItem>;
  /** The transactional cost breakdown */
  transactional?: Maybe<CostBreakdownItem>;
}

/** Discount Redemptions represent unique uses of a Discount on an Order Item */
export interface DiscountRedemption {
  discount: Discount;
  id: Scalars['ID'];
  orderItem: OrderItem;
}

/** Discounts allow Buyers to redeem a discount on their purchase */
export interface Discount {
  /** The literal value a Buyer needs to provide to redeem the discount */
  code: Scalars['String'];
  /** In UTC */
  createdAt: Scalars['Time'];
  /** The event to which the discount code is restricted, if applicable */
  event?: Maybe<Event>;
  /** The redemption value of the Discount - as a fixed amount */
  fixed?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  /** The redemption value of the Discount - as a percent (represented in the range 0..1) */
  percent?: Maybe<Scalars['Float']>;
  /** The total number of Order Items that a Discount can be applied to */
  quantity?: Maybe<Scalars['Int']>;
  /** The type of redemption value, dictates which field the redemption value should be read from (either `percent` or `fixed`) */
  redemptionType: DiscountRedemptionType;
  /** Redemption objects for this Discount */
  redemptions: DiscountRedemptionConnection;
  /** The total number of possible uses remaining */
  remaining?: Maybe<Scalars['Int']>;
  state: DiscountState;
  /** In UTC */
  updatedAt: Scalars['Time'];
}

/** Possible states a Discount can be in */
export enum DiscountState {
  /** The Discount is available for use */
  Active = 'ACTIVE',
  /** The Discount is not available for use */
  Inactive = 'INACTIVE',
  /** The Discount has been fully used (no quantity remaining) and cannot be redeemed */
  Used = 'USED'
}

/** Possible redemption value types of Discounts */
export enum DiscountRedemptionType {
  /** If percent, the value of the Discount is a percentage off */
  Percent = 'PERCENT',
  /** If fixed, the value of the Discount is a fixed amount off */
  Fixed = 'FIXED'
}

export interface DiscountRedemptionConnection {
  nodes: Array<DiscountRedemption>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface DiscountRedemptionConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** A transaction made by a Buyer for Order Items (frequently, but not exclusively, tickets for an Event) */
export interface Order {
  /** The access keys used for this Order */
  accessKeys?: Maybe<Array<Maybe<AccessKey>>>;
  /** Add Ons in the order */
  addOnItems: OrderItemConnection;
  /** Buyer's answers to checkout question, on the level of the Order itself */
  answers: Array<Maybe<Answer>>;
  /** The Buyer who created the Order */
  buyer: Buyer;
  /** Whether this order is in a confirmed state */
  confirmed?: Maybe<Scalars['Boolean']>;
  /** Cost breakdown for the Order */
  costBreakdown: OrderCostBreakdown;
  /** In UTC */
  createdAt: Scalars['Time'];
  /** Whether there are questions or answers on this order that can be edited */
  editable?: Maybe<Scalars['Boolean']>;
  /** Each Order has one Event - the event the tickets are for */
  event: Event;
  historical?: Maybe<Scalars['Boolean']>;
  /** The Host of the Event the tickets on the Order are for */
  host: Host;
  hostPurchased: Scalars['Boolean'];
  id: Scalars['ID'];
  /** The invoice for an order */
  invoice?: Maybe<Invoice>;
  /** Number of accepted transfers for this order */
  numberOfAcceptedTransfers?: Maybe<Scalars['Int']>;
  /** Items in the order */
  orderItems: OrderItemConnection;
  /** Where the Buyer purchased the order from */
  origin?: Maybe<Scalars['String']>;
  paymentDeclineCode?: Maybe<PaymentDeclineCode>;
  /** A private note created by the Host of the Event, made available to Buyers. Often contains information important to the Buyer. */
  privateNote?: Maybe<Scalars['String']>;
  providerSourceClient?: Maybe<Scalars['String']>;
  providerSourceType?: Maybe<ProviderSourceType>;
  /** Collection of rate ids for the order items in this order */
  rateIds?: Maybe<Array<Scalars['ID']>>;
  /** If the Buyer clicked a link containing a `ref` parameter, this string will return the same value. You can use this to track purchases from specific links. */
  ref?: Maybe<Scalars['String']>;
  /** Gets a refund estimate on this order */
  refundEstimate?: Maybe<Scalars['Float']>;
  state: OrderState;
  /** The TimeSlot the tickets on the Order are for */
  timeSlot: TimeSlot;
  /** In UTC */
  updatedAt: Scalars['Time'];
  /** Whether an order item on this order can be upgraded */
  upgradeable?: Maybe<Scalars['Boolean']>;
  /** Whether the order was purchased using Klarna */
  usedKlarna?: Maybe<Scalars['Boolean']>;
  /** Whether the order was purchased using a payment plan */
  usedPaymentPlan?: Maybe<Scalars['Boolean']>;
  /** Whether an order item on this order can be voided */
  voidable?: Maybe<Scalars['Boolean']>;
}


/** A transaction made by a Buyer for Order Items (frequently, but not exclusively, tickets for an Event) */
export interface OrderOrderItemsArgs {
  externalMetadata?: Maybe<Scalars['String']>;
}


/** A transaction made by a Buyer for Order Items (frequently, but not exclusively, tickets for an Event) */
export interface OrderRefundEstimateArgs {
  orderItemRefundDatas: Array<Maybe<OrderItemRefundData>>;
}

export interface Answer {
  id: Scalars['ID'];
  question: Question;
  /** Value of the Answer - the actual 'answer' to the question asked to the user. Note that this field returns a string, but the content will contain stringified versions of other types like arrays. This behavior exists because GraphQL does not currently support union scalar field types. Universe recommends parsing these values as JSON in whatever consuming application you are writing. */
  value?: Maybe<Scalars['JSON']>;
}

export interface Question {
  context: AnswerContext;
  editable: Scalars['String'];
  hasOther: Scalars['Boolean'];
  id: Scalars['ID'];
  included: Scalars['Boolean'];
  index: Scalars['Int'];
  multiple: Scalars['Boolean'];
  /** Question */
  question: Scalars['String'];
  /** Rate ids for which this question is set */
  rateIds: Array<Maybe<Scalars['ID']>>;
  /** Rates which this question needs to be set */
  rates: Array<Maybe<Rate>>;
  required: Scalars['Boolean'];
  selectOptions?: Maybe<Scalars['JSON']>;
  subType?: Maybe<Scalars['String']>;
  /** Type of the question, have no idea which values it can have */
  type: AnswerType;
}

/** Question types */
export enum AnswerType {
  /** Regular text */
  Text = 'TEXT',
  /** Single choice from many */
  Select = 'SELECT',
  /** Multiple choices from many */
  MultiSelect = 'MULTI_SELECT',
  /** Yes or no */
  Checkbox = 'CHECKBOX'
}

/** Answer context */
export enum AnswerContext {
  /** Once per order item question */
  OrderItem = 'ORDER_ITEM',
  /** Once per order question */
  Order = 'ORDER'
}

/** A user who has created an Order on Universe */
export interface Buyer extends User {
  admin: Scalars['Boolean'];
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']>;
  /** A (potentially unconfirmed) email address - uniquely tied to the Buyer ID */
  email: Scalars['String'];
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']>;
  /** Orders created for this Event */
  orders?: Maybe<OrderConnection>;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']>;
  superAdmin: Scalars['Boolean'];
}

export interface OrderConnection {
  nodes: Array<Order>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface OrderConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** When a card issuer declines a payment, they will provide a reason through the use of a decline code */
export enum PaymentDeclineCode {
  /** translation missing: en.misc.bank_decline_codes.approve_with_id */
  ApproveWithId = 'APPROVE_WITH_ID',
  /** translation missing: en.misc.bank_decline_codes.call_issuer */
  CallIssuer = 'CALL_ISSUER',
  /** translation missing: en.misc.bank_decline_codes.card_declined */
  CardDeclined = 'CARD_DECLINED',
  /** translation missing: en.misc.bank_decline_codes.card_not_supported */
  CardNotSupported = 'CARD_NOT_SUPPORTED',
  /** translation missing: en.misc.bank_decline_codes.card_velocity_exceeded */
  CardVelocityExceeded = 'CARD_VELOCITY_EXCEEDED',
  /** translation missing: en.misc.bank_decline_codes.currency_not_supported */
  CurrencyNotSupported = 'CURRENCY_NOT_SUPPORTED',
  /** translation missing: en.misc.bank_decline_codes.do_not_honor */
  DoNotHonor = 'DO_NOT_HONOR',
  /** translation missing: en.misc.bank_decline_codes.do_not_try_again */
  DoNotTryAgain = 'DO_NOT_TRY_AGAIN',
  /** translation missing: en.misc.bank_decline_codes.duplicate_transaction */
  DuplicateTransaction = 'DUPLICATE_TRANSACTION',
  /** translation missing: en.misc.bank_decline_codes.expired_card */
  ExpiredCard = 'EXPIRED_CARD',
  /** translation missing: en.misc.bank_decline_codes.fraudulent */
  Fraudulent = 'FRAUDULENT',
  /** translation missing: en.misc.bank_decline_codes.generic_decline */
  GenericDecline = 'GENERIC_DECLINE',
  /** translation missing: en.misc.bank_decline_codes.incorrect_number */
  IncorrectNumber = 'INCORRECT_NUMBER',
  /** translation missing: en.misc.bank_decline_codes.incorrect_cvc */
  IncorrectCvc = 'INCORRECT_CVC',
  /** translation missing: en.misc.bank_decline_codes.insufficient_funds */
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  /** translation missing: en.misc.bank_decline_codes.invalid_account */
  InvalidAccount = 'INVALID_ACCOUNT',
  /** translation missing: en.misc.bank_decline_codes.invalid_amount */
  InvalidAmount = 'INVALID_AMOUNT',
  /** translation missing: en.misc.bank_decline_codes.invalid_cvc */
  InvalidCvc = 'INVALID_CVC',
  /** translation missing: en.misc.bank_decline_codes.invalid_expiry_year */
  InvalidExpiryYear = 'INVALID_EXPIRY_YEAR',
  /** translation missing: en.misc.bank_decline_codes.issuer_not_available */
  IssuerNotAvailable = 'ISSUER_NOT_AVAILABLE',
  /** translation missing: en.misc.bank_decline_codes.lost_card */
  LostCard = 'LOST_CARD',
  /** translation missing: en.misc.bank_decline_codes.new_account_information_available */
  NewAccountInformationAvailable = 'NEW_ACCOUNT_INFORMATION_AVAILABLE',
  /** translation missing: en.misc.bank_decline_codes.no_action_taken */
  NoActionTaken = 'NO_ACTION_TAKEN',
  /** translation missing: en.misc.bank_decline_codes.not_permitted */
  NotPermitted = 'NOT_PERMITTED',
  /** translation missing: en.misc.bank_decline_codes.pickup_card */
  PickupCard = 'PICKUP_CARD',
  /** translation missing: en.misc.bank_decline_codes.processing_error */
  ProcessingError = 'PROCESSING_ERROR',
  /** translation missing: en.misc.bank_decline_codes.restricted_card */
  RestrictedCard = 'RESTRICTED_CARD',
  /** translation missing: en.misc.bank_decline_codes.revocation_of_all_authorizations */
  RevocationOfAllAuthorizations = 'REVOCATION_OF_ALL_AUTHORIZATIONS',
  /** translation missing: en.misc.bank_decline_codes.stolen_card */
  StolenCard = 'STOLEN_CARD',
  /** translation missing: en.misc.bank_decline_codes.stop_payment_order */
  StopPaymentOrder = 'STOP_PAYMENT_ORDER',
  /** translation missing: en.misc.bank_decline_codes.testmode_decline */
  TestmodeDecline = 'TESTMODE_DECLINE',
  /** translation missing: en.misc.bank_decline_codes.try_again_later */
  TryAgainLater = 'TRY_AGAIN_LATER',
  /** translation missing: en.misc.bank_decline_codes.withdrawal_count_limit_exceeded */
  WithdrawalCountLimitExceeded = 'WITHDRAWAL_COUNT_LIMIT_EXCEEDED'
}

/** Payment methods supported by our payment systems */
export enum ProviderSourceType {
  Bch = 'BCH',
  Btc = 'BTC',
  Dcr = 'DCR',
  Doge = 'DOGE',
  Eth = 'ETH',
  Lnbt = 'LNBT',
  Ltc = 'LTC',
  Xmr = 'XMR',
  Xrp = 'XRP',
  Alipay = 'ALIPAY',
  Bancontact = 'BANCONTACT',
  Eps = 'EPS',
  Giropay = 'GIROPAY',
  Globee = 'GLOBEE',
  Ideal = 'IDEAL',
  Invoice = 'INVOICE',
  Klarna = 'KLARNA',
  Masterpass = 'MASTERPASS',
  Multibanco = 'MULTIBANCO',
  Przelewy = 'PRZELEWY',
  Sepa = 'SEPA',
  Sofort = 'SOFORT',
  Visacheckout = 'VISACHECKOUT',
  Wechat = 'WECHAT',
  Card = 'CARD',
  ApplePay = 'APPLE_PAY',
  AndroidPay = 'ANDROID_PAY',
  GooglePay = 'GOOGLE_PAY',
  Offline = 'OFFLINE'
}

/** Access Keys allow you to password protect tickets so you can sell tickets to a certain group of patrons. Perfect for offering special rates for members or VIPs. */
export interface AccessKey {
  id: Scalars['ID'];
  key: Scalars['String'];
  /** The total number of locked tickets that can be purchased with a given key. */
  quantity?: Maybe<Scalars['Int']>;
  state: AccessKeyState;
}

/** The state an access key can be in */
export enum AccessKeyState {
  /** The Access Key is available for use */
  Active = 'ACTIVE',
  /** The Access Key is not available for use */
  Inactive = 'INACTIVE',
  /** The Access Key has been fully used and cannot be redeemed */
  Used = 'USED'
}

/** The invoice for an order */
export interface Invoice {
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  number?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
}

/** Refund arguments related to a single OrderItem */
export interface OrderItemRefundData {
  id: Scalars['ID'];
  amount: Scalars['Float'];
  refundType: RefundType;
  void: Scalars['Boolean'];
}

/** Specifies if a refund is flat or in percentage of the amount */
export enum RefundType {
  Flat = 'FLAT',
  Percent = 'PERCENT'
}

/** CheckInState describes if an OrderItem was checked in or not. */
export enum CheckInState {
  /** The initial check in state */
  CheckedOut = 'CHECKED_OUT',
  /** Check in done by the host */
  ManuallyCheckedIn = 'MANUALLY_CHECKED_IN',
  /** QR Code was scanned at the door */
  ScannedIn = 'SCANNED_IN',
  /** QR Code was scanned out */
  ScannedOut = 'SCANNED_OUT'
}

/** A product or service that can be sold at any of your events */
export interface AddOn {
  /** The currency in which the add-on is sold */
  currency?: Maybe<CurrencyCode>;
  /** A detailed description of the add-on */
  description?: Maybe<Scalars['String']>;
  /** Events where this add on is available. Set to [] for all events. */
  eventIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  events?: Maybe<Array<Maybe<Event>>>;
  /** The creator of the add-on */
  host?: Maybe<Host>;
  /** Determines who pays the Universe service fee. */
  hostPaysCommission?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  /** The name of add-on item being sold */
  name?: Maybe<Scalars['String']>;
  /** The rates associated with the add-on */
  rates?: Maybe<Array<Maybe<AddOnRate>>>;
  /** The taxes associated with the add-on */
  taxes?: Maybe<Array<Maybe<Tax>>>;
}

/** Rates are product types available for sale - most typically these are tickets, in this case configured for add-on */
export interface AddOnRate {
  /** Associated add-on for this rate */
  addOn?: Maybe<AddOn>;
  /** Amount available after considering claims and sold items */
  availability?: Maybe<Scalars['Int']>;
  /** Capacities for add on rate */
  capacities?: Maybe<Array<RateCapacity>>;
  /** Number of add-on items available in stock */
  capacity?: Maybe<Scalars['Int']>;
  /** Description of rate */
  description?: Maybe<Scalars['String']>;
  /** The displayed price of this specific rate with all in pricing */
  displayPrice?: Maybe<Scalars['Float']>;
  eventId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** A URL to the event image. Custom height and width can be supplied */
  imageUrl?: Maybe<Scalars['String']>;
  /** Images of the add on option */
  images?: Maybe<Array<Image>>;
  /** Maximum number of add-ons allowed per order */
  maxQuantity?: Maybe<Scalars['Int']>;
  /** Minimum number of add-ons required per order */
  minQuantity?: Maybe<Scalars['Int']>;
  /** The name of the rate */
  name: Scalars['String'];
  optionName?: Maybe<Scalars['String']>;
  /** The sale price of this specific rate */
  price?: Maybe<Scalars['Float']>;
  /** Product number of this specific add-on rate */
  sku?: Maybe<Scalars['String']>;
  /** The currency the buyer must purchase the rate in */
  srcCurrency: Scalars['String'];
  /** The state of a specific add-on rate */
  state?: Maybe<RateState>;
  /** The type of rate */
  type: Scalars['String'];
  /** Whether an add on rate has sold add-ons or not */
  used: Scalars['Boolean'];
}


/** Rates are product types available for sale - most typically these are tickets, in this case configured for add-on */
export interface AddOnRateImageUrlArgs {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
}

/** Capacity for a Rate within a Time Slot */
export interface RateCapacity {
  /** Available capacity count for a Rate within a Time Slot. It depends on the Event and Rate maxQuantity. Returns null if there is no maxQuantity set for Event and Rate.  */
  available?: Maybe<Scalars['Int']>;
  countAttending?: Maybe<Scalars['Int']>;
  countAvailable?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** Rate for the capacity in a Time Slot */
  rate: Rate;
  rateId: Scalars['ID'];
  timeSlotId?: Maybe<Scalars['ID']>;
  type: Scalars['String'];
}

/** A tax rate that can be applied to cost items */
export interface Tax {
  /** The add ons that use this tax */
  addOns?: Maybe<Array<Maybe<AddOn>>>;
  /** The creator of the tax */
  host?: Maybe<Host>;
  id?: Maybe<Scalars['ID']>;
  /** The name of tax */
  name?: Maybe<Scalars['String']>;
  /** The percentage of tax rate */
  percent?: Maybe<Scalars['Float']>;
  /** Tax registration number if available */
  taxId?: Maybe<Scalars['String']>;
}

/** Monetary amounts (includes a currency and sales $) */
export interface Money {
  /** The currency of the money */
  currency: CurrencyCode;
  /** The exponent of the currency, the number of digits used after the decimal place */
  exponent: Scalars['Int'];
  /** Monetary amount returned as an integer in the lowest denomination (cents) to reduce floating point errors */
  monetaryAmount: Scalars['Int'];
}

/** Possible Rate types. */
export enum RateType {
  /** The rate is for a paid ticket */
  PaidTicket = 'PAID_TICKET',
  /** The rate is for a free ticket */
  FreeTicket = 'FREE_TICKET',
  /** The rate is for a pay what you can ticket */
  PwywTicket = 'PWYW_TICKET',
  /** The rate is for an add-on */
  AddOn = 'ADD_ON'
}

/** Sales per specific day */
export interface DailySales {
  /** Day */
  day: Scalars['Date'];
  /** Sales */
  salesAmount: Scalars['Float'];
}

/** The conversion tracking labels a host as set for their Event */
export interface GoogleAdsSendTos {
  /** the send_to field to fire on checkout modal is loaded */
  checkout: Array<Maybe<Scalars['String']>>;
  /** the send_to field to fire on an event pageview */
  pageview: Array<Maybe<Scalars['String']>>;
  /** the send_to field to fire on an event purhcase */
  purchase: Array<Maybe<Scalars['String']>>;
}

export interface RateConnection {
  nodes: Array<Rate>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface RateConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** True if rate with state exists and false if rate with state does not exist */
export interface RateStateExists {
  inactive: Scalars['Boolean'];
  locked: Scalars['Boolean'];
  soldAtDoor?: Maybe<Scalars['Boolean']>;
}

export interface SaversConnection {
  nodes: Array<Saver>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface SaversConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** Represents a Saver who Saved an Event */
export interface Saver extends User {
  admin: Scalars['Boolean'];
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']>;
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']>;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']>;
  superAdmin: Scalars['Boolean'];
}

export interface AccessKeyConnection {
  nodes: Array<AccessKey>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface AccessKeyConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

export interface DiscountConnection {
  nodes: Array<Discount>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface DiscountConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** WIP */
export interface Report {
  columns: Scalars['JSON'];
  preview: Scalars['JSON'];
}


/** WIP */
export interface ReportPreviewArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** Event category */
export interface Category {
  id: Scalars['ID'];
  key: CategoryKey;
  /** The name of the category in English */
  name: Scalars['String'];
}

/** List of potential event categories */
export enum CategoryKey {
  /** Other */
  Other = 'OTHER',
  /** Business */
  Business = 'BUSINESS',
  /** Music */
  Music = 'MUSIC',
  /** Sports */
  Sports = 'SPORTS',
  /** Comedy */
  Comedy = 'COMEDY',
  /** Film */
  Film = 'FILM',
  /** Crafts */
  Crafts = 'CRAFTS',
  /** Food & Drink */
  FoodDrink = 'FOOD_DRINK',
  /** Fashion */
  Fashion = 'FASHION',
  /** Social */
  Social = 'SOCIAL',
  /** Performances */
  PerformingArts = 'PERFORMING_ARTS',
  /** Tech */
  Tech = 'TECH',
  /** Galleries */
  GalleriesMuseums = 'GALLERIES_MUSEUMS'
}

/** A label on an Event indicating an interest the Event includes */
export interface Tag {
  /** The name of the tag */
  name: Scalars['String'];
  /** The slug for the tag */
  slug: Scalars['String'];
  /** Whether the tag is suggestable or not */
  suggestable?: Maybe<Scalars['Boolean']>;
}

export interface ScheduleConnection {
  nodes: Array<Schedule>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface ScheduleConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** The object that controls the creation of batch timeslots */
export interface Schedule {
  /** End date in YYYY/MM/DD */
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The timeslot intervals assigned to this Schedule */
  intervals: Array<ScheduleInterval>;
  /** Current progress of this schedule */
  progress: Scalars['Int'];
  /** Start date in YYYY/MM/DD */
  startDate: Scalars['String'];
  /** The state this schedule is in */
  state: ScheduleState;
  /** Weekdays available in the schedule, represented by 0-6 */
  weekdaysAvailable: Array<Days>;
}

/** Days */
export enum Days {
  /** Sunday */
  Sunday = 'SUNDAY',
  /** Monday */
  Monday = 'MONDAY',
  /** Tuesday */
  Tuesday = 'TUESDAY',
  /** Wednesday */
  Wednesday = 'WEDNESDAY',
  /** Thursday */
  Thursday = 'THURSDAY',
  /** Friday */
  Friday = 'FRIDAY',
  /** Saturday */
  Saturday = 'SATURDAY'
}

/** Each individual timeslot rule within a schedule */
export interface ScheduleInterval {
  /** The timeslot intervals assigned to this Schedule */
  datesToSkip: Array<Maybe<Scalars['Date']>>;
  /** How long a timeslot will last from the startHour and startMinute */
  duration: Scalars['Int'];
  id: Scalars['ID'];
  /** The hour when a timeslot will begin */
  startHour: Scalars['Int'];
  /** The minute when a timeslot will begin */
  startMinute: Scalars['Int'];
}

/** The state a schedule is in */
export enum ScheduleState {
  /** This schedule is currently manipulating timeslots */
  InSync = 'IN_SYNC',
  /** This schedule is done manipulating timeslots */
  SyncDone = 'SYNC_DONE'
}

/** Report that provides overview information on order item sales */
export interface TimeSlotReport {
  addOnsByDate?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Number of add-ons sold */
  addonItemsSold: Scalars['Int'];
  /** Number of order items and add-ons sold */
  costItemsSold: Scalars['Int'];
  id: Scalars['ID'];
  invitationsByDate?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Number of invitations sent out to potential buyers */
  invitationsSent?: Maybe<Scalars['Int']>;
  /** The monetary value that represents the total of tickets sold in-person before Universe has made its deductions */
  offlineAmountGross?: Maybe<Scalars['Float']>;
  salesByDate?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Number of order items sold */
  ticketItemsSold: Scalars['Int'];
  ticketsAvailableByRate?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  ticketsByDate?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Number of orders processed */
  ticketsSold: Scalars['Int'];
  totalAddonItemsGross?: Maybe<Scalars['Float']>;
  /** Monetary amount of discounts applied to order items */
  totalAmountDiscount?: Maybe<Scalars['Float']>;
  /** Commission amount given to Universe as payment per ticket */
  totalCommissionIncluded?: Maybe<Scalars['Float']>;
  /** Fees on on order items */
  totalFee?: Maybe<Scalars['Float']>;
  /** The monetary value that represents the total before Universe has made its deductions */
  totalGross?: Maybe<Scalars['Float']>;
  /** The monetary value that represents the total after Universe has made its deductions such as Service Charge */
  totalNet?: Maybe<Scalars['Float']>;
  /** Taxes on order items */
  totalTaxes?: Maybe<Scalars['Float']>;
  totalTicketItemsGross?: Maybe<Scalars['Float']>;
  /** Taxes on Universe fees or Value Added Tax */
  totalVatIncluded?: Maybe<Scalars['Float']>;
}

export interface RateCapacityConnection {
  nodes: Array<RateCapacity>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface RateCapacityConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** Analytics data for Viewer */
export interface Analytics {
  /** Add-on revenue amount by this currency */
  addOnSalesAmount: Scalars['Float'];
  /** Add-on sales by day */
  addOnSalesByDay: Array<DailySales>;
  /** Average OrderItem count per Order */
  averageOrderItemCountPerOrder?: Maybe<Scalars['Float']>;
  /** Average OrderItem price */
  averageOrderItemPrice?: Maybe<Scalars['Float']>;
  /** Average Order price */
  averageOrderPrice?: Maybe<Scalars['Float']>;
  /** Aggregate top buyers' locations */
  buyersLocations: Array<BuyersLocation>;
  /** Revenue amount by this currency */
  salesAmount: Scalars['Float'];
  /** Sales by day */
  salesByDay: Array<DailySales>;
  /** Aggregate sales information by channels */
  salesChannels: Array<SalesChannel>;
  /** Ticket revenue amount by this currency */
  ticketSalesAmount: Scalars['Float'];
  /** Ticket sales by day */
  ticketSalesByDay: Array<DailySales>;
  /** Total tickets sold per currency */
  ticketsSold: Scalars['Int'];
  /** The most popular hour of Order purchase */
  topHourOfPurchase?: Maybe<Scalars['Int']>;
}


/** Analytics data for Viewer */
export interface AnalyticsAddOnSalesAmountArgs {
  slugs?: Maybe<Array<Scalars['String']>>;
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
}


/** Analytics data for Viewer */
export interface AnalyticsAddOnSalesByDayArgs {
  slugs?: Maybe<Array<Scalars['String']>>;
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
}


/** Analytics data for Viewer */
export interface AnalyticsAverageOrderItemCountPerOrderArgs {
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
  slugs?: Maybe<Array<Scalars['String']>>;
}


/** Analytics data for Viewer */
export interface AnalyticsAverageOrderItemPriceArgs {
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
  slugs?: Maybe<Array<Scalars['String']>>;
}


/** Analytics data for Viewer */
export interface AnalyticsAverageOrderPriceArgs {
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
  slugs?: Maybe<Array<Scalars['String']>>;
}


/** Analytics data for Viewer */
export interface AnalyticsBuyersLocationsArgs {
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
  slugs?: Maybe<Array<Scalars['String']>>;
}


/** Analytics data for Viewer */
export interface AnalyticsSalesAmountArgs {
  slugs?: Maybe<Array<Scalars['String']>>;
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
}


/** Analytics data for Viewer */
export interface AnalyticsSalesByDayArgs {
  slugs?: Maybe<Array<Scalars['String']>>;
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
}


/** Analytics data for Viewer */
export interface AnalyticsSalesChannelsArgs {
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
  slugs?: Maybe<Array<Scalars['String']>>;
}


/** Analytics data for Viewer */
export interface AnalyticsTicketSalesAmountArgs {
  slugs?: Maybe<Array<Scalars['String']>>;
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
}


/** Analytics data for Viewer */
export interface AnalyticsTicketSalesByDayArgs {
  slugs?: Maybe<Array<Scalars['String']>>;
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
}


/** Analytics data for Viewer */
export interface AnalyticsTicketsSoldArgs {
  slugs?: Maybe<Array<Scalars['String']>>;
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
}


/** Analytics data for Viewer */
export interface AnalyticsTopHourOfPurchaseArgs {
  from: Scalars['Date'];
  to: Scalars['Date'];
  currency: CurrencyCode;
  slugs?: Maybe<Array<Scalars['String']>>;
}

/** Sales data through channel */
export interface SalesChannel {
  /** Channel name */
  channelName?: Maybe<Scalars['String']>;
  /** Sales amount */
  salesAmount?: Maybe<Scalars['Int']>;
  /** Sales count */
  salesCount?: Maybe<Scalars['Int']>;
}

/** Number of Buyers per Location */
export interface BuyersLocation {
  /** Number of Buyers per Location */
  buyerCount: Scalars['Int'];
  /** Buyers' Location */
  location: Location;
}

export interface Location {
  /** City name */
  city: Scalars['String'];
  /** Country name */
  country: Scalars['String'];
}

/** Stripe connect account properties */
export interface StripeConnectAccount {
  currency: CurrencyCode;
  /** Stripe Connect Account Id */
  id: Scalars['String'];
  /** Payment methods associated with stripe connect account */
  paymentMethods?: Maybe<Array<Scalars['String']>>;
}

export interface CustomReportConnection {
  nodes: Array<CustomReport>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface CustomReportConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** Account level custom report */
export interface CustomReport {
  /** @deprecated Prefer camelCase to snake case. Please use the id field instead */
  _id: Scalars['ID'];
  columns: Array<Scalars['String']>;
  createdAt: Scalars['String'];
  /** @deprecated Prefer camelCase to snake case. Please use the createdAt field instead */
  created_at: Scalars['String'];
  /** Currency parameter for filtering events in event select modal */
  currencyFilter?: Maybe<Scalars['String']>;
  /** The day of the week when the scheduler should send report on. */
  days?: Maybe<Array<Maybe<Days>>>;
  description?: Maybe<Scalars['String']>;
  /** Whether the scheduler is enabled or not */
  enabled?: Maybe<Scalars['Boolean']>;
  /** Custom date range parameter (from) for filtering events in event select modal */
  eventRangeFrom?: Maybe<Scalars['String']>;
  /** Custom date range parameter (to) for filtering events in event select modal */
  eventRangeTo?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Scalars['String']>>;
  filters?: Maybe<Array<Scalars['JSON']>>;
  /** The starting date of the scheduler */
  from?: Maybe<Scalars['Date']>;
  /** The speicific hour of the day when the report should be sent. Value must be between 0 and 23 */
  hour?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The ordering column and direction of order prior to exporting to a CSV/XLS file. Value must be in '{COLUMN} {DIRECTION}' format */
  order?: Maybe<Scalars['String']>;
  reportType: Scalars['String'];
  /** @deprecated Prefer camelCase to snake case. Please use the reportType field instead */
  report_type: Scalars['String'];
  /** Time parameter for filtering events in event select modal */
  timeFilter?: Maybe<Scalars['String']>;
  /** The ending date of the scheduler */
  to?: Maybe<Scalars['Date']>;
  updatedAt: Scalars['String'];
  /** @deprecated Prefer camelCase to snake case. Please use the updatedAt field instead */
  updated_at: Scalars['String'];
}

export interface AddOnConnection {
  nodes: Array<AddOn>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface AddOnConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

export interface TaxConnection {
  nodes: Array<Tax>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface TaxConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** Set of Events */
export interface EventSet extends BaseEvent {
  /** Street-level address */
  address: Scalars['String'];
  /** All Events in the EventSet */
  allEvents: Array<Maybe<Event>>;
  /** All Additional Images */
  allImages: Array<Image>;
  /** EventSet calendar fields */
  calendar: Calendar;
  /** Cover Photo */
  coverPhoto: Image;
  /** In UTC */
  createdAt: Scalars['Time'];
  /** A detailed description of the event */
  description: Scalars['String'];
  /**
   * Detailed description with html
   * @deprecated Deprecated in favor of description field with argument[:format] equal to 'html'
   */
  descriptionHtml: Scalars['String'];
  /** Events in the EventSet */
  events: EventConnection;
  id: Scalars['ID'];
  /** Other Images */
  images: ImageConnection;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug: Scalars['String'];
  /** A brief description */
  title: Scalars['String'];
  /** In UTC */
  updatedAt: Scalars['Time'];
  /** Event or EventSet creator */
  user: Profile;
  /** Name of the venue */
  venueName?: Maybe<Scalars['String']>;
}


/** Set of Events */
export interface EventSetDescriptionArgs {
  format?: Maybe<ContentFormat>;
}

/** Calendar namespace for widgets */
export interface Calendar {
  /** List of dates with future / ongoing Events */
  dates: Array<Scalars['Date']>;
  /** List of ongoing / future TimeSlots, sorted by startAt, unique by startDate and Event. */
  timeSlots: TimeSlotConnection;
}


/** Calendar namespace for widgets */
export interface CalendarTimeSlotsArgs {
  date?: Maybe<Scalars['Date']>;
}

/** Transfers represents the act of transferring one ticket from an user to another one */
export interface Transfer {
  /** In UTC */
  createdAt: Scalars['Time'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  orderItem?: Maybe<OrderItem>;
  originalOrderItem?: Maybe<OrderItem>;
  state: TransferState;
  token?: Maybe<Scalars['String']>;
  /** In UTC */
  updatedAt: Scalars['Time'];
}

/** The state a transfer can be in */
export enum TransferState {
  /** The transfer has been sent to the new owner to be accepted */
  Pending = 'PENDING',
  /** The transfer expires once event begins */
  Expired = 'EXPIRED',
  /** The new ticket owner has accepted this transfer */
  Accepted = 'ACCEPTED',
  /** The transfer recipient declined the transfer */
  Declined = 'DECLINED',
  /** The transfer has been cancelled */
  Cancelled = 'CANCELLED'
}

/** The user making the current GraphQL operation */
export interface Viewer extends User {
  admin: Scalars['Boolean'];
  /** The avatar URL, 160x160 pixels */
  avatarUrl?: Maybe<Scalars['String']>;
  /** The user has configured their account as a business */
  business?: Maybe<Scalars['Boolean']>;
  /** The approximate city of the location of Viewer either by saved location or IP address */
  cityName?: Maybe<Scalars['String']>;
  /** The user has configured email */
  confirmed?: Maybe<Scalars['Boolean']>;
  /** The approximate country of the location of Viewer either by saved location or IP address */
  countryName?: Maybe<Scalars['String']>;
  /** the currencies of the viewer's organizations */
  currencies?: Maybe<Array<CurrencyCode>>;
  /** A user-defined description */
  description?: Maybe<Scalars['String']>;
  /** The base currency for the event */
  displayCurrency?: Maybe<Scalars['String']>;
  /** A (potentially unconfirmed) email address belong to the Viewer */
  email?: Maybe<Scalars['String']>;
  /** All Events by this Viewer */
  events: EventConnection;
  /** The first name of the type implementing a User interface */
  firstName?: Maybe<Scalars['String']>;
  /** The user is hosting events on Universe */
  host?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  /** The last name of the type implementing a User interface */
  lastName?: Maybe<Scalars['String']>;
  /** The approximate latitude of the location of Viewer either by saved location or IP address */
  latitude?: Maybe<Scalars['Float']>;
  /** User locale */
  locale?: Maybe<Locale>;
  /** The approximate longitude of the location of Viewer either by saved location or IP address */
  longitude?: Maybe<Scalars['Float']>;
  /** Viewers memberships organization information */
  memberships?: Maybe<MembershipConnection>;
  /** A single field concatenating firstName and lastName */
  name?: Maybe<Scalars['String']>;
  /** The type of the viewer account (Admin, User, Spammer, etc) */
  role: UserRole;
  /** A unique identifier, shorter version of the ID. Should be used for URI construction. */
  slug?: Maybe<Scalars['String']>;
  /** The avatar URL, 50x50 pixels */
  smallAvatarUrl?: Maybe<Scalars['String']>;
  superAdmin: Scalars['Boolean'];
  /** The predicted TimeSlot duration from startAt to endAt in seconds */
  timeSlotDuration?: Maybe<Scalars['Int']>;
  /** The predicted TimeSlot startAt time */
  timeSlotStartAt: Scalars['TimeWithoutTz'];
  /** The transacted currency for the event */
  transactedCurrency?: Maybe<Scalars['String']>;
}


/** The user making the current GraphQL operation */
export interface ViewerEventsArgs {
  slugs?: Maybe<Array<Scalars['String']>>;
  currency?: Maybe<CurrencyCode>;
  states?: Maybe<Array<EventState>>;
}

export interface MembershipConnection {
  nodes: Array<Membership>;
  pagination?: Maybe<Scalars['JSON']>;
  totalCount: Scalars['Int'];
}


export interface MembershipConnectionNodesArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}

/** Memberships are the groups that the user is a part of through different accessibility / permission levels */
export interface Membership {
  /** Check if the membership applies to all listings */
  allEvents: Scalars['Boolean'];
  /** Listings that the membership applies to */
  eventIds?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The owner of the group in which the user has membership */
  owner: Host;
  /** Check the membership against a specific permission type */
  permission: Scalars['Boolean'];
  /** Check the membership against some or all of a list of permission types */
  permissions: Scalars['Boolean'];
}


/** Memberships are the groups that the user is a part of through different accessibility / permission levels */
export interface MembershipPermissionArgs {
  for: Permission;
}


/** Memberships are the groups that the user is a part of through different accessibility / permission levels */
export interface MembershipPermissionsArgs {
  for: Array<Permission>;
  any?: Maybe<Scalars['Boolean']>;
}

/** Possible permission types on a team membership (dashboard/organization) */
export enum Permission {
  /** Edit event details such as description, dates, checkout questions, etc., and advanced settings such as ticket transfers and waitlist options */
  Edit = 'EDIT',
  /** Ability to delete events */
  Deletable = 'DELETABLE',
  /** Ability to publish events */
  Transition = 'TRANSITION',
  /** Ability to customize the "Get Tickets" button */
  Design = 'DESIGN',
  /** Ability to manage events */
  Manage = 'MANAGE',
  /** Promote the event using social deals, discount codes, social integrations, etc. */
  Promote = 'PROMOTE',
  /** Access to At-the-Door (via the BoxOffice app) to scan and sell tickets onsite */
  CheckIn = 'CHECK_IN',
  /** Access sales and ticket data on the event and account dashboards, and through integrations */
  ManageOverview = 'MANAGE_OVERVIEW',
  /** Access to account level Reports */
  Report = 'REPORT',
  /** Ability to view orders, contact buyers, refund and cancel orders */
  Orders = 'ORDERS',
  /** Ability view and contact attendees, and resend tickets */
  Attendees = 'ATTENDEES',
  /** Ability to add or upload attendees */
  AddAttendees = 'ADD_ATTENDEES',
  /** Ability to export Guestlists Report (ideal for checking people in at the door) */
  GuestsReport = 'GUESTS_REPORT',
  /** Ability to export Attendee's Report (includes data collected during checkout) */
  AttendeesReport = 'ATTENDEES_REPORT',
  /** Access to Order Reports (includes a cost breakdown of each order) */
  OrdersReport = 'ORDERS_REPORT',
  /** Ability to export Check-in Report (list of all the check-ins and check-outs) */
  CheckInsReport = 'CHECK_INS_REPORT',
  /** Ability to export Cancellations and Refunds Report */
  CancellationsReport = 'CANCELLATIONS_REPORT',
  /** Access to Tickets Report (cost breakdown for each ticket) */
  TicketsReport = 'TICKETS_REPORT',
  /** Ability to export Requires Approval Report (identifies all orders that have not been approved yet) */
  ApprovalsReport = 'APPROVALS_REPORT',
  /** Ability to export Audit Reports (shows a high-level daily summary of ticket sales) */
  AuditReport = 'AUDIT_REPORT',
  /** Receive all emails regarding account activity */
  ReceivesEmails = 'RECEIVES_EMAILS',
  /** Full access to all events and ability to create events */
  Creatable = 'CREATABLE',
  /** Access to Universe Service Invoices */
  ServiceInvoice = 'SERVICE_INVOICE',
  /** Ability to manage all Add-ons */
  ManageAddOns = 'MANAGE_ADD_ONS',
  /** Access to Add-ons Reports (includes the cost breakdown for each add-on) */
  AddOnsReport = 'ADD_ONS_REPORT',
  /** Access to Account Activity Reports (financial summary of all money that came into and out of your account) */
  ActivityReport = 'ACTIVITY_REPORT',
  /** Access to Event Reports (A summary of tickets sold by ticket type on the event level) */
  EventsReport = 'EVENTS_REPORT',
  /** Access to Timeslot Reports (summary of tickets sold by ticket type on the timeslot level) */
  TimeslotsReport = 'TIMESLOTS_REPORT',
  /** Access to Chargeback Reports (all chargebacks for orders processed on Universe Payments) */
  ChargebacksReport = 'CHARGEBACKS_REPORT',
  /** Access to Rebate Reports (all rebates received) */
  RebatesReport = 'REBATES_REPORT',
  /** Access to Rebate Invoice Reports (all rebates received) */
  RebateInvoice = 'REBATE_INVOICE',
  /** Access to Invoice Reports */
  InvoiceReport = 'INVOICE_REPORT'
}

/** The pricing plan that a host is on. */
export enum PricingPlan {
  /** The starter pricing plan. */
  Starter = 'STARTER',
  /** The standard pricing plan. */
  Standard = 'STANDARD',
  /** A custom pricing plan. */
  Pro = 'PRO'
}

export interface Country {
  code: CountryCode;
  continent: Continent;
  currency: CurrencyCode;
  geonameId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  universeAvailable: Scalars['Boolean'];
}

/** Two letter continent code */
export enum Continent {
  /** Africa */
  Af = 'AF',
  /** Antarctica */
  An = 'AN',
  /** Asia */
  As = 'AS',
  /** Europe */
  Eu = 'EU',
  /** North America */
  Na = 'NA',
  /** Oceania */
  Oc = 'OC',
  /** South America */
  Sa = 'SA'
}

/** Calendar namespace for the new single widgets */
export interface CalendarWidget {
  /** Whether to enable waitlist for the Event */
  allowWaitlist: Scalars['Boolean'];
  /** Available months for the event grouped by year */
  availableMonths: Array<Maybe<AvailableMonths>>;
  /** Available Timeslots */
  calendarDates: Array<Maybe<CalendarWidgetDate>>;
  /** Calendar timeslots */
  calendarTimeslots: Array<Maybe<CalendarWidgetTimeslot>>;
  /** A detailed description of the event */
  description: Scalars['String'];
  hostId: Scalars['ID'];
  id: Scalars['ID'];
  /** Tickets are sold out for this Event */
  soldOut: Scalars['Boolean'];
  /** Sold out dates */
  soldOutDates: Array<Maybe<Scalars['String']>>;
  /** Determines if a given event is timed entry based */
  timedEntry: Scalars['Boolean'];
  /** Timezone of the event location */
  timezone: Scalars['String'];
  /** A brief description */
  title: Scalars['String'];
  /** Currency that is displayed and charged in */
  transactionCurrency: CurrencyCode;
}


/** Calendar namespace for the new single widgets */
export interface CalendarWidgetDescriptionArgs {
  format?: Maybe<ContentFormat>;
}

/** Available months for an event grouped by year. */
export interface AvailableMonths {
  /** Event month */
  months: Array<Maybe<Scalars['Int']>>;
  /** Event year */
  year: Scalars['Int'];
}

/** CalendarWidgetTimeslot */
export interface CalendarWidgetTimeslot {
  /** Timeslot end date and time in UTC */
  endAt: Scalars['String'];
  /** Determines if the end date has passed or not */
  endDatePassed: Scalars['Boolean'];
  /** Extended timeslot end date and time in UTC */
  extendedEndAt: Scalars['String'];
  id: Scalars['ID'];
  /** max price */
  maxPrice?: Maybe<Scalars['Float']>;
  /** min price */
  minPrice?: Maybe<Scalars['Float']>;
  /** Tickets are sold out for this timeslot */
  soldOut: Scalars['Boolean'];
  /** Timeslot start date and time in UTC */
  startAt: Scalars['String'];
}

/** CalendarWidgetDate */
export interface CalendarWidgetDate {
  /** calendar timeslots */
  calendarTimeslotIds: Array<Maybe<Scalars['ID']>>;
  /** date */
  date?: Maybe<Scalars['String']>;
  /** totalCount */
  totalCount?: Maybe<Scalars['Int']>;
}

/** This type provides data necessary for Upgrade Tickets modal to function on manage panel */
export interface UpgradableOrder {
  /** Buyer's answers to checkout questions on the Order level */
  answers: Array<Maybe<Answer>>;
  id: Scalars['ID'];
  /** Collection of rate ids for the upgradable order items in this order */
  rateIds?: Maybe<Array<Scalars['ID']>>;
  /** Whether the order has upgradable items */
  upgradable: Scalars['Boolean'];
  /** Order items that can be upgraded to a different rate */
  upgradableOrderItems: Array<UpgradableOrderItem>;
}

/** An order item in the order that is upgradable to another rate */
export interface UpgradableOrderItem {
  /** Buyer's answers to checkout questions on the OrderItem level (i.e. CostItem) */
  answers: Array<Maybe<Answer>>;
  /** In UTC */
  createdAt: Scalars['Time'];
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Owner of upgradable order item */
  owner: OrderItemOwner;
  rateId: Scalars['ID'];
  /** In UTC */
  updatedAt: Scalars['Time'];
  /** Determines wether OrderItem is upgradable */
  upgradable: Scalars['Boolean'];
  /** Rates to which an oder item can be upgraded to */
  upgradableToRates: Array<Maybe<Rate>>;
}

/** Information about a user that owns an order item(s) */
export interface OrderItemOwner {
  email: Scalars['String'];
  name: Scalars['String'];
}

/** Serves the Event Information Tickets tab on the Manage Panel */
export interface ManageTickets {
  /** The currency the host receives funds in */
  baseCurrency: Scalars['String'];
  /** Capacity number for the event */
  capacity?: Maybe<Scalars['Int']>;
  /** Flag to show a warning to the fan when capacity is close to reaching capacity */
  capacityAlert: Scalars['Boolean'];
  country?: Maybe<Country>;
  hostId: Scalars['ID'];
  id: Scalars['ID'];
  rates: Array<ManageTicketsRate>;
  refundOffset: RefundOffset;
  refundOffsetType: RefundOffsetType;
  /** The currency the buyer must purchase in */
  srcCurrency: Scalars['String'];
  /** The timeSlots assigned to this Event */
  timeSlots: Array<ManageWhenTimeslot>;
  /** Determines whether or not an event admits visitors to an event between a set time */
  timedEntry: Scalars['Boolean'];
  /** Timezone of the event location */
  timezone: Scalars['String'];
  /** Determines whether or not an event is virtual */
  virtual: Scalars['Boolean'];
}

export interface ManageTicketsRate {
  /** The default access key for a given locked rate */
  accessKey?: Maybe<Scalars['String']>;
  /** Optional number for the ticket capacity on this rate - default is unlimited */
  capacity?: Maybe<Scalars['Int']>;
  clientGroup?: Maybe<RateClientGroup>;
  /** Description for the rate */
  description?: Maybe<Scalars['String']>;
  displayPrice?: Maybe<Scalars['Float']>;
  /** UNIX Timestamp */
  endStamp?: Maybe<Scalars['Int']>;
  /** List of rules that exclude a rate from displaying against given timeslot(s) */
  exclusionRules?: Maybe<Array<Scalars['JSON']>>;
  id: Scalars['ID'];
  /** Optional number for the maximum amount of tickets to be sold on this rate */
  maxTickets?: Maybe<Scalars['Int']>;
  /** The minimum price of this type of ticket, used only in PWYW/donation tickets */
  minPrice: Scalars['Float'];
  /** Optional number for the minimum amount of tickets to be sold on this rate */
  minTickets?: Maybe<Scalars['Int']>;
  /** Name for the rate */
  name: Scalars['String'];
  /** The price of this type of ticket - 0.0 if free */
  price: Scalars['Float'];
  /** Seconds before event to release the tickets */
  releaseOffset?: Maybe<Scalars['Int']>;
  /** The currency the buyer must purchase the rate in */
  srcCurrency: Scalars['String'];
  /** UNIX Timestamp */
  startStamp?: Maybe<Scalars['Int']>;
  state: RateState;
  type: RateType;
  /** If rate has sold order items */
  used: Scalars['Boolean'];
}

export interface ManageWhenTimeslot {
  /** Timeslot end date and time in UTC */
  endAt: Scalars['TimeWithoutTz'];
  id: Scalars['ID'];
  /** Whether the timeslot can be modified or not */
  readOnly: Scalars['Boolean'];
  /** Timeslot start date and time in UTC */
  startAt: Scalars['TimeWithoutTz'];
}

/** Serves the Event Information When (Timed Entry) tab on the Manage Panel */
export interface ManageWhenTimedEntry {
  id: Scalars['ID'];
  /** The schedules assigned to this Event */
  schedules: Array<Schedule>;
  /** Timezone of the event location */
  timezone: Scalars['String'];
  /** Determines whether or not an event is virtual */
  virtual: Scalars['Boolean'];
}

/** Serves the Event Information When (Regular Entry) tab on the Manage Panel */
export interface ManageWhenRegularEntry {
  address: Scalars['String'];
  country?: Maybe<Country>;
  id: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  /** The timeSlots assigned to this Event */
  timeSlots: Array<ManageWhenTimeslot>;
  /** Timezone of the event location */
  tz: Scalars['String'];
  venueName?: Maybe<Scalars['String']>;
  /** Determines whether or not an event is virtual */
  virtual: Scalars['Boolean'];
  /** Virtual connection info */
  virtualInfo?: Maybe<Scalars['String']>;
}

/** Serves the Event Information Customize tab on the Manage Panel */
export interface ManageCustomize {
  /** Optional additional images for the event (promotional photos, venue photos) */
  additionalImages: Array<Image>;
  /** Optional field that the host sets for additional contact information */
  contactDetails?: Maybe<Scalars['String']>;
  /** Cover photo for the event (min 100x100px, max 2MB). Auto-generated if no initial entry. */
  coverPhoto: Image;
  /** Event photo for the event (min 1110x444px, max 5MB). Auto-generated if no initial entry. */
  eventPhoto: Image;
  id: Scalars['ID'];
  /** Content that will be provided to buyer's only */
  privateNote?: Maybe<Scalars['String']>;
}

/** Serves the Customize Tickets tab on the Event Manage Panel */
export interface ManageCustomizeTickets {
  /** Date objects for the ticket customization calendar */
  calendarDates: Array<CustomizeTicketsDate>;
  /** First available month */
  firstMonthWithEvents: Scalars['String'];
  /** Last available month */
  lastMonthWithEvents: Scalars['String'];
  /** Ticket types in original state for all timeslots */
  rates: Array<Rate>;
  /** All timeslots for the listing */
  timeslots: Array<CustomizeTicketsTimeslot>;
  /** Timezone of the event location */
  timezone: Scalars['String'];
}

/** Date objects for the Customize Tickets calendar */
export interface CustomizeTicketsDate {
  /** Calendar timeslots for the tickets customization page */
  calendarTimeslotIds: Array<Maybe<Scalars['ID']>>;
  /** date */
  date?: Maybe<Scalars['String']>;
}

/** Timeslot objects for the Customize Tickets tab */
export interface CustomizeTicketsTimeslot {
  /** Timeslot end date and time */
  endAt: Scalars['String'];
  id: Scalars['ID'];
  rateIds: Array<Maybe<Scalars['ID']>>;
  /** Timeslot start date and time */
  startAt: Scalars['String'];
}

/** Serves the Event Information Basics tab on the Manage Panel */
export interface ManageBasics {
  address: Scalars['String'];
  categoryId: Scalars['String'];
  country?: Maybe<Country>;
  description: Scalars['String'];
  id: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  privacy: Scalars['String'];
  /** The timeSlots assigned to this Event */
  timeSlots: Array<ManageWhenTimeslot>;
  timedEntry: Scalars['Boolean'];
  title: Scalars['String'];
  /** Timezone of the event location */
  tz: Scalars['String'];
  venueName?: Maybe<Scalars['String']>;
}

/** Returns fields required for TimeSlotSelect modal to function */
export interface TimeSlotSelect {
  /** Dates on which there are time slots */
  datesWithTimeSlots?: Maybe<Array<Scalars['String']>>;
}

export interface Mutation {
  /**
   * Accept Transfer
   * @deprecated Mutations should conform to the `subjectAction` format, please use `transferAccept`
   */
  acceptTransfer?: Maybe<TransferAcceptPayload>;
  /** Create AddOn */
  addOnCreate?: Maybe<AddOnCreatePayload>;
  /** Delete AddOn */
  addOnDelete?: Maybe<AddOnDeletePayload>;
  /** Update Addon */
  addOnUpdate?: Maybe<AddOnUpdatePayload>;
  /** Message event attendees */
  attendeesMessage?: Maybe<AttendeesMessagePayload>;
  /**
   * Create AddOn
   * @deprecated Mutations should conform to the `subjectAction` format, please use `addOnCreate`
   */
  createAddOn?: Maybe<AddOnCreatePayload>;
  /**
   * Create Custom Report
   * @deprecated Mutations should conform to the `subjectAction` format, please use `customReportCreate`
   */
  createCustomReport?: Maybe<CustomReportCreatePayload>;
  /**
   * Create Event
   * @deprecated Mutations should conform to the `subjectAction` format, please use `eventCreate`
   */
  createEvent?: Maybe<EventCreatePayload>;
  /**
   * Create Tax
   * @deprecated Mutations should conform to the `subjectAction` format, please use `taxCreate`
   */
  createTax?: Maybe<TaxCreatePayload>;
  /** Create Custom Report */
  customReportCreate?: Maybe<CustomReportCreatePayload>;
  /** Delete Custom Report */
  customReportDelete?: Maybe<CustomReportDeletePayload>;
  /** Update Custom Report */
  customReportUpdate?: Maybe<CustomReportUpdatePayload>;
  /**
   * Decline Transfer
   * @deprecated Mutations should conform to the `subjectAction` format, please use `transferDecline`
   */
  declineTransfer?: Maybe<TransferDeclinePayload>;
  /**
   * Delete AddOn
   * @deprecated Mutations should conform to the `subjectAction` format, please use `addOnDelete`
   */
  deleteAddOn?: Maybe<AddOnDeletePayload>;
  /**
   * Delete Custom Report
   * @deprecated Mutations should conform to the `subjectAction` format, please use `customReportDelete`
   */
  deleteCustomReport?: Maybe<CustomReportDeletePayload>;
  /**
   * Delete Event
   * @deprecated Mutations should conform to the `subjectAction` format, please use `eventDelete`
   */
  deleteEvent?: Maybe<EventDeletePayload>;
  /** Create Discount belonging to this user */
  discountCreate?: Maybe<DiscountCreatePayload>;
  /** Delete Discount */
  discountDelete?: Maybe<DiscountDeletePayload>;
  /** Bulk create account level discount codes */
  discountsCreate?: Maybe<DiscountsCreatePayload>;
  /** Update many Discounts at once */
  discountsUpdate?: Maybe<DiscountsUpdatePayload>;
  /**
   * Duplicate Event
   * @deprecated Mutations should conform to the `subjectAction` format, please use `eventDuplicate`
   */
  duplicateEvent?: Maybe<EventDuplicatePayload>;
  /** Create Event */
  eventCreate?: Maybe<EventCreatePayload>;
  /** Delete Event */
  eventDelete?: Maybe<EventDeletePayload>;
  /** Duplicate Event */
  eventDuplicate?: Maybe<EventDuplicatePayload>;
  /** Publish Event */
  eventPublish?: Maybe<EventPublishPayload>;
  /** Report Event */
  eventReport?: Maybe<EventReportPayload>;
  /** Save Event */
  eventSave?: Maybe<EventSavePayload>;
  /** Report Event Set */
  eventSetReport?: Maybe<EventSetReportPayload>;
  /** Unpublish Event */
  eventUnpublish?: Maybe<EventUnpublishPayload>;
  /** Update Event */
  eventUpdate?: Maybe<EventUpdatePayload>;
  /** Update host google analytics integration */
  hostGaIntegrationUpdate?: Maybe<HostGaIntegrationUpdatePayload>;
  /** Change locale for current Viewer */
  localeChange?: Maybe<LocaleChangePayload>;
  /** Approves a pending order */
  orderApprove?: Maybe<OrderApprovePayload>;
  /** Change the buyer info for an order */
  orderBuyerInfoChange?: Maybe<OrderBuyerInfoChangePayload>;
  /** Declines a pending order */
  orderDecline?: Maybe<OrderDeclinePayload>;
  /** Change the attendee info for an order item */
  orderItemAttendeeInfoChange?: Maybe<OrderItemAttendeeInfoChangePayload>;
  /** Check in an order item */
  orderItemCheckIn?: Maybe<OrderItemCheckInPayload>;
  /** Check out an order item */
  orderItemCheckOut?: Maybe<OrderItemCheckOutPayload>;
  /** Update external metadata field on OrderItem */
  orderItemExternalMetadataUpdate?: Maybe<ExternalMetadataUpdatePayload>;
  /** Resend email with order item details */
  orderItemResend?: Maybe<OrderItemResendPayload>;
  /** Marks an order that was purchased using an invoice as 'Paid' */
  orderMarkInvoiceAsPaid?: Maybe<MarkInvoiceAsPaidPayload>;
  /** Refund order items */
  orderRefund?: Maybe<OrderRefundPayload>;
  /** Resend email with order details */
  orderResend?: Maybe<OrderResendPayload>;
  /** Update the time slot for an order */
  orderTimeSlotUpdate?: Maybe<OrderTimeSlotUpdatePayload>;
  /** Upgrade order items */
  orderUpgrade?: Maybe<OrderUpgradePayload>;
  /**
   * Publish Event
   * @deprecated Mutations should conform to the `subjectAction` format, please use `eventPublish`
   */
  publishEvent?: Maybe<EventPublishPayload>;
  /** Create a ticket */
  rateCreate?: Maybe<RateCreatePayload>;
  /** Update a single rate */
  rateUpdate?: Maybe<RateUpdatePayload>;
  /** Update multiple rates */
  ratesUpdate?: Maybe<RatesUpdatePayload>;
  /**
   * Save Event
   * @deprecated Mutations should conform to the `subjectAction` format, please use `eventSave`
   */
  saveEvent?: Maybe<EventSavePayload>;
  /** Makes API call to Seats.io to publish a seating map */
  seatsPublishDraft?: Maybe<SeatsPublishDraftPayload>;
  /** Synchronize rates with seats chart for reserved seated events */
  seatsSyncRates?: Maybe<SeatsSyncRatesPayload>;
  /** Create Tax */
  taxCreate?: Maybe<TaxCreatePayload>;
  /** Updates a TimeSlot */
  timeSlotUpdate?: Maybe<TimeSlotUpdatePayload>;
  /** Accept Transfer */
  transferAccept?: Maybe<TransferAcceptPayload>;
  /** Decline Transfer */
  transferDecline?: Maybe<TransferDeclinePayload>;
  /**
   * Update Addon
   * @deprecated Mutations should conform to the `subjectAction` format, please use `addOnUpdate`
   */
  updateAddOn?: Maybe<AddOnUpdatePayload>;
  /**
   * Update Custom Report
   * @deprecated Mutations should conform to the `subjectAction` format, please use `customReportUpdate`
   */
  updateCustomReport?: Maybe<CustomReportUpdatePayload>;
  /**
   * Update a single rate
   * @deprecated Mutations should conform to the `subjectAction` format, please use `rateUpdate`
   */
  updateRate?: Maybe<RateUpdatePayload>;
  /**
   * Update multiple rates
   * @deprecated Mutations should conform to the `subjectAction` format, please use `ratesUpdate`
   */
  updateRates?: Maybe<RatesUpdatePayload>;
}


export interface MutationAcceptTransferArgs {
  input: TransferAcceptInput;
}


export interface MutationAddOnCreateArgs {
  input: AddOnCreateInput;
}


export interface MutationAddOnDeleteArgs {
  input: AddOnDeleteInput;
}


export interface MutationAddOnUpdateArgs {
  input: AddOnUpdateInput;
}


export interface MutationAttendeesMessageArgs {
  input: AttendeesMessageInput;
}


export interface MutationCreateAddOnArgs {
  input: AddOnCreateInput;
}


export interface MutationCreateCustomReportArgs {
  input: CustomReportCreateInput;
}


export interface MutationCreateEventArgs {
  input: EventCreateInput;
}


export interface MutationCreateTaxArgs {
  input: TaxCreateInput;
}


export interface MutationCustomReportCreateArgs {
  input: CustomReportCreateInput;
}


export interface MutationCustomReportDeleteArgs {
  input: CustomReportDeleteInput;
}


export interface MutationCustomReportUpdateArgs {
  input: CustomReportUpdateInput;
}


export interface MutationDeclineTransferArgs {
  input: TransferDeclineInput;
}


export interface MutationDeleteAddOnArgs {
  input: AddOnDeleteInput;
}


export interface MutationDeleteCustomReportArgs {
  input: CustomReportDeleteInput;
}


export interface MutationDeleteEventArgs {
  input: EventDeleteInput;
}


export interface MutationDiscountCreateArgs {
  input: DiscountCreateInput;
}


export interface MutationDiscountDeleteArgs {
  input: DiscountDeleteInput;
}


export interface MutationDiscountsCreateArgs {
  input: DiscountsCreateInput;
}


export interface MutationDiscountsUpdateArgs {
  input: DiscountsUpdateInput;
}


export interface MutationDuplicateEventArgs {
  input: EventDuplicateInput;
}


export interface MutationEventCreateArgs {
  input: EventCreateInput;
}


export interface MutationEventDeleteArgs {
  input: EventDeleteInput;
}


export interface MutationEventDuplicateArgs {
  input: EventDuplicateInput;
}


export interface MutationEventPublishArgs {
  input: EventPublishInput;
}


export interface MutationEventReportArgs {
  input: EventReportInput;
}


export interface MutationEventSaveArgs {
  input: EventSaveInput;
}


export interface MutationEventSetReportArgs {
  input: EventSetReportInput;
}


export interface MutationEventUnpublishArgs {
  input: EventUnpublishInput;
}


export interface MutationEventUpdateArgs {
  input: EventUpdateInput;
}


export interface MutationHostGaIntegrationUpdateArgs {
  input: HostGaIntegrationUpdateInput;
}


export interface MutationLocaleChangeArgs {
  input: LocaleChangeInput;
}


export interface MutationOrderApproveArgs {
  input: OrderApproveInput;
}


export interface MutationOrderBuyerInfoChangeArgs {
  input: OrderBuyerInfoChangeInput;
}


export interface MutationOrderDeclineArgs {
  input: OrderDeclineInput;
}


export interface MutationOrderItemAttendeeInfoChangeArgs {
  input: OrderItemAttendeeInfoChangeInput;
}


export interface MutationOrderItemCheckInArgs {
  input: OrderItemCheckInInput;
}


export interface MutationOrderItemCheckOutArgs {
  input: OrderItemCheckOutInput;
}


export interface MutationOrderItemExternalMetadataUpdateArgs {
  input: ExternalMetadataUpdateInput;
}


export interface MutationOrderItemResendArgs {
  input: OrderItemResendInput;
}


export interface MutationOrderMarkInvoiceAsPaidArgs {
  input: MarkInvoiceAsPaidInput;
}


export interface MutationOrderRefundArgs {
  input: OrderRefundInput;
}


export interface MutationOrderResendArgs {
  input: OrderResendInput;
}


export interface MutationOrderTimeSlotUpdateArgs {
  input: OrderTimeSlotUpdateInput;
}


export interface MutationOrderUpgradeArgs {
  input: OrderUpgradeInput;
}


export interface MutationPublishEventArgs {
  input: EventPublishInput;
}


export interface MutationRateCreateArgs {
  input: RateCreateInput;
}


export interface MutationRateUpdateArgs {
  input: RateUpdateInput;
}


export interface MutationRatesUpdateArgs {
  input: RatesUpdateInput;
}


export interface MutationSaveEventArgs {
  input: EventSaveInput;
}


export interface MutationSeatsPublishDraftArgs {
  input: SeatsPublishDraftInput;
}


export interface MutationSeatsSyncRatesArgs {
  input: SeatsSyncRatesInput;
}


export interface MutationTaxCreateArgs {
  input: TaxCreateInput;
}


export interface MutationTimeSlotUpdateArgs {
  input: TimeSlotUpdateInput;
}


export interface MutationTransferAcceptArgs {
  input: TransferAcceptInput;
}


export interface MutationTransferDeclineArgs {
  input: TransferDeclineInput;
}


export interface MutationUpdateAddOnArgs {
  input: AddOnUpdateInput;
}


export interface MutationUpdateCustomReportArgs {
  input: CustomReportUpdateInput;
}


export interface MutationUpdateRateArgs {
  input: RateUpdateInput;
}


export interface MutationUpdateRatesArgs {
  input: RatesUpdateInput;
}

/** Autogenerated return type of DiscountCreate */
export interface DiscountCreatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  discount?: Maybe<Discount>;
  errors?: Maybe<Array<Scalars['String']>>;
}

/** Autogenerated input type of DiscountCreate */
export interface DiscountCreateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  state: DiscountState;
  redemptionType: DiscountRedemptionType;
  quantity?: Maybe<Scalars['Int']>;
  percent?: Maybe<Scalars['Float']>;
  fixed?: Maybe<Scalars['Float']>;
  userId: Scalars['ID'];
}

/** Autogenerated return type of DiscountDelete */
export interface DiscountDeletePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  discount?: Maybe<Discount>;
  errors?: Maybe<Array<Scalars['String']>>;
}

/** Autogenerated input type of DiscountDelete */
export interface DiscountDeleteInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  user_id?: Maybe<Scalars['ID']>;
}

/** Autogenerated return type of DiscountsUpdate */
export interface DiscountsUpdatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  discounts: Array<Maybe<Discount>>;
  errors: Array<Maybe<Array<Error>>>;
}

/** Error message with the corresponding key it belongs to */
export interface Error {
  key: Scalars['String'];
  message: Scalars['String'];
}

/** Autogenerated input type of DiscountsUpdate */
export interface DiscountsUpdateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  discounts: Array<Discount_UpdateDiscount>;
}

export interface Discount_UpdateDiscount {
  id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  state?: Maybe<DiscountState>;
  redemptionType?: Maybe<DiscountRedemptionType>;
  quantity?: Maybe<Scalars['Int']>;
  percent?: Maybe<Scalars['Float']>;
  fixed?: Maybe<Scalars['Float']>;
}

/** Autogenerated return type of DiscountsCreate */
export interface DiscountsCreatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  discounts?: Maybe<Array<Discount>>;
  errors?: Maybe<Array<Scalars['String']>>;
}

/** Autogenerated input type of DiscountsCreate */
export interface DiscountsCreateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  codes: Array<Scalars['String']>;
  state: DiscountState;
  redemptionType: DiscountRedemptionType;
  quantity?: Maybe<Scalars['Int']>;
  percent?: Maybe<Scalars['Float']>;
  fixed?: Maybe<Scalars['Float']>;
  userId: Scalars['ID'];
}

/** Autogenerated return type of HostGaIntegrationUpdate */
export interface HostGaIntegrationUpdatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  host?: Maybe<Host>;
}

/** Autogenerated input type of HostGaIntegrationUpdate */
export interface HostGaIntegrationUpdateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  hostGaIntegration: Host_GaIntegration;
}

export interface Host_GaIntegration {
  hostId: Scalars['ID'];
  googleAnalyticsId: Scalars['String'];
  googleAnalyticsEcommerce: Scalars['Boolean'];
}

/** Autogenerated return type of LocaleChange */
export interface LocaleChangePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  viewer?: Maybe<Viewer>;
}

/** Autogenerated input type of LocaleChange */
export interface LocaleChangeInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  locale: Locale;
}

/** Autogenerated return type of SeatsSyncRates */
export interface SeatsSyncRatesPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  event?: Maybe<Event>;
}

/** Autogenerated input type of SeatsSyncRates */
export interface SeatsSyncRatesInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of SeatsPublishDraft */
export interface SeatsPublishDraftPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  event?: Maybe<Event>;
}

/** Autogenerated input type of SeatsPublishDraft */
export interface SeatsPublishDraftInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of RateCreate */
export interface RateCreatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Error>>;
  rate?: Maybe<Rate>;
}

/** Autogenerated input type of RateCreate */
export interface RateCreateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  eventId: Scalars['ID'];
  rate: RateCreateInputType;
}

/** Properties for RateCreate mutation */
export interface RateCreateInputType {
  attributes: RateCreateAttributes;
}

/** Attributes that define a template for a ticket offering */
export interface RateCreateAttributes {
  /** Name of the ticket */
  name?: Maybe<Scalars['String']>;
  /** Description of the ticket */
  description?: Maybe<Scalars['String']>;
  /** Price of the ticket */
  price?: Maybe<Scalars['Float']>;
  /** Min price of the ticket (For PWYW_TICKET only) */
  minPrice?: Maybe<Scalars['Float']>;
  /** Number of tickets available */
  capacity?: Maybe<Scalars['Int']>;
  /** Where this ticket is available */
  clientGroup?: Maybe<RateClientGroup>;
  /** Used to specify tickets as being locked, hidden, active, etc */
  state?: Maybe<RateState>;
  /** When the ticket is available for sale */
  saleStart?: Maybe<Scalars['Time']>;
  /** When the ticket is no longer available for sale */
  saleEnd?: Maybe<Scalars['Time']>;
  /** Minimum number of tickets required per order */
  minQuantity?: Maybe<Scalars['Int']>;
  /** Maximum number of tickets allowed per order */
  maxQuantity?: Maybe<Scalars['Int']>;
  /** When to release purchased tickets to attendees */
  releaseOffset?: Maybe<ReleaseOffset>;
  /** Ticket type */
  type?: Maybe<RateCreateType>;
  /** Access key for locked rates */
  accessKey?: Maybe<AccessKeyInputType>;
  /** Rate exclusion rules */
  exclusionRules?: Maybe<Array<Scalars['JSON']>>;
}

/** How long before the event would you like to release the ticket? */
export enum ReleaseOffset {
  /** Tickets will be released to attendees immediately */
  Immediately = 'IMMEDIATELY',
  /** Tickets will be released to attendees 1 day before the event */
  OneDay = 'ONE_DAY',
  /** Tickets will be released to attendees 2 days before the event */
  TwoDays = 'TWO_DAYS',
  /** Tickets will be released to attendees 3 days before the event */
  ThreeDays = 'THREE_DAYS',
  /** Tickets will be released to attendees 7 days before the event */
  OneWeek = 'ONE_WEEK',
  /** Tickets will never be released to attendees */
  Never = 'NEVER'
}

/** Possible types to set on the createRate mutation. */
export enum RateCreateType {
  /** The rate is for a paid ticket */
  PaidTicket = 'PAID_TICKET',
  /** The rate is for a free ticket */
  FreeTicket = 'FREE_TICKET',
  /** The rate is for a pay what you can ticket */
  PwywTicket = 'PWYW_TICKET'
}

/** Properties for AccessKey creation */
export interface AccessKeyInputType {
  /** Access key */
  key: Scalars['String'];
}

/** Autogenerated return type of RateUpdate */
export interface RateUpdatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  rate?: Maybe<Rate>;
}

/** Autogenerated input type of RateUpdate */
export interface RateUpdateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  rate: RateUpdateInputType;
}

/** Properties for RateUpdate mutation */
export interface RateUpdateInputType {
  id?: Maybe<Scalars['ID']>;
  attributes: RateUpdateAttributes;
}

/** Shared updatable Rate attributes */
export interface RateUpdateAttributes {
  /** Name of the ticket */
  name?: Maybe<Scalars['String']>;
  /** Description of the ticket */
  description?: Maybe<Scalars['String']>;
  /** Price of the ticket */
  price?: Maybe<Scalars['Float']>;
  /** Min price of the ticket (For PWYW_TICKET only) */
  minPrice?: Maybe<Scalars['Float']>;
  /** Number of tickets available */
  capacity?: Maybe<Scalars['Int']>;
  /** Where this ticket is available */
  clientGroup?: Maybe<RateClientGroup>;
  /** When the ticket is available for sale */
  saleStart?: Maybe<Scalars['Time']>;
  /** When the ticket is no longer available for sale */
  saleEnd?: Maybe<Scalars['Time']>;
  /** Minimum number of tickets required per order */
  minQuantity?: Maybe<Scalars['Int']>;
  /** Maximum number of tickets allowed per order */
  maxQuantity?: Maybe<Scalars['Int']>;
  /** When to release purchased tickets to attendees */
  releaseOffset?: Maybe<ReleaseOffset>;
  /** Ticket type */
  type?: Maybe<RateCreateType>;
  /** Access key for locked rates */
  accessKey?: Maybe<AccessKeyInputType>;
  /** Used to specify tickets as being locked, hidden, active, etc */
  state?: Maybe<RateState>;
  sku?: Maybe<Scalars['String']>;
  /** Rate exclusion rules */
  exclusionRules?: Maybe<Array<Scalars['JSON']>>;
}

/** Autogenerated return type of RatesUpdate */
export interface RatesUpdatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  rates?: Maybe<Array<Rate>>;
}

/** Autogenerated input type of RatesUpdate */
export interface RatesUpdateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  rates: Array<Maybe<RateUpdateInputType>>;
}

/** Autogenerated return type of EventSave */
export interface EventSavePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  event?: Maybe<Event>;
}

/** Autogenerated input type of EventSave */
export interface EventSaveInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  eventId: Scalars['ID'];
}

/** Autogenerated return type of EventUpdate */
export interface EventUpdatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  event?: Maybe<Event>;
}

/** Autogenerated input type of EventUpdate */
export interface EventUpdateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  attributes: Event_EventUpdate;
}

export interface Event_EventUpdate {
  title?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  country?: Maybe<Scalars['String']>;
  tz?: Maybe<Scalars['String']>;
  transactionCurrency?: Maybe<Scalars['String']>;
  settlementCurrency?: Maybe<Scalars['String']>;
  contactDetails?: Maybe<Scalars['String']>;
  allInPricing?: Maybe<Scalars['Boolean']>;
  privacy?: Maybe<Scalars['String']>;
  venueName?: Maybe<Scalars['String']>;
  socialButtons?: Maybe<Scalars['Boolean']>;
  hiddenDate?: Maybe<Scalars['Boolean']>;
  maxQuantity?: Maybe<Scalars['Int']>;
  capacityAlert?: Maybe<Scalars['Boolean']>;
  privateNote?: Maybe<Scalars['String']>;
  virtual?: Maybe<Scalars['Boolean']>;
  virtualInfo?: Maybe<Scalars['String']>;
  refundPolicy?: Maybe<RefundPolicyInputType>;
  coverPhoto?: Maybe<ImageInputType>;
  eventPhoto?: Maybe<ImageInputType>;
  additionalPhotos?: Maybe<Array<ImageUpdateInputType>>;
  getTicketsText?: Maybe<Scalars['String']>;
  category?: Maybe<Category_EventUpdate>;
  rates?: Maybe<Array<RateUpdateInputType>>;
  timeSlots?: Maybe<Array<TimeSlot_EventUpdate>>;
  schedules?: Maybe<Array<Schedule_EventUpdate>>;
}

/** Properties for a Refund policy on event creation */
export interface RefundPolicyInputType {
  attributes: RefundPolicyAttributes;
}

/** Attributes that define a template for a refund policy */
export interface RefundPolicyAttributes {
  /** Time offset */
  offset?: Maybe<RefundOffset>;
  /** Time scope */
  type?: Maybe<RefundOffsetType>;
}

/** Image for listings, avatars, and add on options */
export interface ImageInputType {
  uploadId: Scalars['String'];
  isGif?: Maybe<Scalars['Boolean']>;
  cropWidth?: Maybe<Scalars['Int']>;
  cropHeight?: Maybe<Scalars['Int']>;
  cropX?: Maybe<Scalars['Int']>;
  cropY?: Maybe<Scalars['Int']>;
}

/** Image for listings, avatars, and add on options */
export interface ImageUpdateInputType {
  id?: Maybe<Scalars['ID']>;
  uploadId?: Maybe<Scalars['String']>;
  isGif?: Maybe<Scalars['Boolean']>;
  cropWidth?: Maybe<Scalars['Int']>;
  cropHeight?: Maybe<Scalars['Int']>;
  cropX?: Maybe<Scalars['Int']>;
  cropY?: Maybe<Scalars['Int']>;
}

export interface Category_EventUpdate {
  id: Scalars['ID'];
}

export interface TimeSlot_EventUpdate {
  id?: Maybe<Scalars['ID']>;
  startAt?: Maybe<Scalars['TimeWithoutTz']>;
  endAt?: Maybe<Scalars['TimeWithoutTz']>;
}

/** Used to bulk update recurring timeslots based on certain rules and intervals */
export interface Schedule_EventUpdate {
  id?: Maybe<Scalars['ID']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  /** Days of the week timeslots will be available */
  weekdaysAvailable?: Maybe<Array<Days>>;
  intervals?: Maybe<Array<Schedule_Intervals_EventUpdate>>;
}

/** Each recurring timeslots start time and duration */
export interface Schedule_Intervals_EventUpdate {
  id?: Maybe<Scalars['ID']>;
  startHour?: Maybe<Scalars['Int']>;
  startMinute?: Maybe<Scalars['Int']>;
  /** The length of the interval in seconds */
  duration?: Maybe<Scalars['Int']>;
  datesToSkip?: Maybe<Array<Scalars['Date']>>;
}

/** Autogenerated return type of EventCreate */
export interface EventCreatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  event?: Maybe<Event>;
}

/** Autogenerated input type of EventCreate */
export interface EventCreateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  event: Event_EventCreate;
  publish?: Maybe<Scalars['Boolean']>;
}

export interface Event_EventCreate {
  category: Category_EventCreate;
  rates: Array<RateCreateInputType>;
  timeSlots?: Maybe<Array<TimeSlot_EventCreate>>;
  schedules?: Maybe<Array<Schedule_EventCreate>>;
  title: Scalars['String'];
  descriptionHtml: Scalars['String'];
  address: Scalars['String'];
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
  transactionCurrency?: Maybe<Scalars['String']>;
  settlementCurrency?: Maybe<Scalars['String']>;
  contactDetails?: Maybe<Scalars['String']>;
  allInPricing?: Maybe<Scalars['Boolean']>;
  coverPhoto?: Maybe<ImageInputType>;
  eventPhoto?: Maybe<ImageInputType>;
  additionalPhotos?: Maybe<Array<ImageInputType>>;
  privacy?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
  venueName?: Maybe<Scalars['String']>;
  socialButtons?: Maybe<Scalars['Boolean']>;
  hiddenDate?: Maybe<Scalars['Boolean']>;
  maxQuantity?: Maybe<Scalars['Int']>;
  capacityAlert?: Maybe<Scalars['Boolean']>;
  privateNote?: Maybe<Scalars['String']>;
  refundPolicy?: Maybe<RefundPolicyInputType>;
  publishLaterAt?: Maybe<Scalars['Time']>;
  virtual?: Maybe<Scalars['Boolean']>;
  virtualInfo?: Maybe<Scalars['String']>;
  availableCountries?: Maybe<Array<Maybe<CountryCode>>>;
}

export interface Category_EventCreate {
  id: Scalars['ID'];
}

export interface TimeSlot_EventCreate {
  startAt: Scalars['TimeWithoutTz'];
  endAt: Scalars['TimeWithoutTz'];
}

/** Used to bulk create recurring timeslots based on certain rules and intervals */
export interface Schedule_EventCreate {
  startDate: Scalars['Date'];
  endDate?: Maybe<Scalars['Date']>;
  /** Days of the week timeslots will be available */
  weekdaysAvailable?: Maybe<Array<Days>>;
  intervals: Array<Schedule_Intervals_EventCreate>;
}

/** Each recurring timeslots start time and duration */
export interface Schedule_Intervals_EventCreate {
  startHour: Scalars['Int'];
  startMinute: Scalars['Int'];
  /** The length of the interval in seconds */
  duration: Scalars['Int'];
  datesToSkip?: Maybe<Array<Scalars['Date']>>;
}

/** Autogenerated return type of EventDuplicate */
export interface EventDuplicatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  event?: Maybe<Event>;
}

/** Autogenerated input type of EventDuplicate */
export interface EventDuplicateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  startAt: Scalars['TimeWithoutTz'];
  endAt: Scalars['TimeWithoutTz'];
  title?: Maybe<Scalars['String']>;
  accessKeys?: Maybe<Scalars['Boolean']>;
  discountCodes?: Maybe<Scalars['Boolean']>;
}

/** Autogenerated return type of EventPublish */
export interface EventPublishPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  event?: Maybe<Event>;
}

/** Autogenerated input type of EventPublish */
export interface EventPublishInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of EventUnpublish */
export interface EventUnpublishPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  event?: Maybe<Event>;
}

/** Autogenerated input type of EventUnpublish */
export interface EventUnpublishInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of EventDelete */
export interface EventDeletePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  event?: Maybe<Event>;
}

/** Autogenerated input type of EventDelete */
export interface EventDeleteInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of EventReport */
export interface EventReportPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  event?: Maybe<Event>;
}

/** Autogenerated input type of EventReport */
export interface EventReportInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of AttendeesMessage */
export interface AttendeesMessagePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  event?: Maybe<Event>;
}

/** Autogenerated input type of AttendeesMessage */
export interface AttendeesMessageInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  messageType: MessageType;
  message: Scalars['String'];
  timeSlotIds?: Maybe<Array<Scalars['ID']>>;
  rateIds?: Maybe<Array<Scalars['ID']>>;
  datetime?: Maybe<Scalars['Time']>;
}

/** Types of filters by which to send messages */
export enum MessageType {
  AfterDate = 'AFTER_DATE',
  ByRate = 'BY_RATE',
  CheckedIn = 'CHECKED_IN',
  Unapproved = 'UNAPPROVED',
  Declined = 'DECLINED',
  All = 'ALL'
}

/** Autogenerated return type of TimeSlotUpdate */
export interface TimeSlotUpdatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  timeSlot?: Maybe<TimeSlot>;
}

/** Autogenerated input type of TimeSlotUpdate */
export interface TimeSlotUpdateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  startTime?: Maybe<Scalars['Time']>;
  endTime?: Maybe<Scalars['Time']>;
  sendEmail: Scalars['Boolean'];
}

/** Autogenerated return type of EventSetReport */
export interface EventSetReportPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  eventSet?: Maybe<EventSet>;
}

/** Autogenerated input type of EventSetReport */
export interface EventSetReportInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of CustomReportCreate */
export interface CustomReportCreatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  custom_report?: Maybe<CustomReport>;
  errors?: Maybe<Array<Scalars['String']>>;
}

/** Autogenerated input type of CustomReportCreate */
export interface CustomReportCreateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  reportType: Scalars['String'];
  columns: Array<Scalars['String']>;
  filters?: Maybe<Array<Scalars['JSON']>>;
  events?: Maybe<Array<Scalars['String']>>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  days?: Maybe<Array<Days>>;
  hour?: Maybe<Scalars['Int']>;
  enabled: Scalars['Boolean'];
  order?: Maybe<Scalars['String']>;
  timeFilter?: Maybe<Scalars['String']>;
  eventRangeFrom?: Maybe<Scalars['Date']>;
  eventRangeTo?: Maybe<Scalars['Date']>;
  currencyFilter?: Maybe<Scalars['String']>;
}

/** Autogenerated return type of CustomReportDelete */
export interface CustomReportDeletePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  custom_report?: Maybe<CustomReport>;
  errors?: Maybe<Array<Scalars['String']>>;
}

/** Autogenerated input type of CustomReportDelete */
export interface CustomReportDeleteInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of CustomReportUpdate */
export interface CustomReportUpdatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  custom_report?: Maybe<CustomReport>;
  errors?: Maybe<Array<Scalars['String']>>;
}

/** Autogenerated input type of CustomReportUpdate */
export interface CustomReportUpdateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  reportType?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Scalars['String']>>;
  filters?: Maybe<Array<Scalars['JSON']>>;
  events?: Maybe<Array<Scalars['String']>>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  days?: Maybe<Array<Days>>;
  hour?: Maybe<Scalars['Int']>;
  enabled: Scalars['Boolean'];
  order?: Maybe<Scalars['String']>;
  timeFilter?: Maybe<Scalars['String']>;
  eventRangeFrom?: Maybe<Scalars['Date']>;
  eventRangeTo?: Maybe<Scalars['Date']>;
  currencyFilter?: Maybe<Scalars['String']>;
}

/** Autogenerated return type of TransferDecline */
export interface TransferDeclinePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Error>>;
  transfer?: Maybe<Transfer>;
}

/** Autogenerated input type of TransferDecline */
export interface TransferDeclineInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  token: Scalars['String'];
}

/** Autogenerated return type of TransferAccept */
export interface TransferAcceptPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Error>>;
  transfer?: Maybe<Transfer>;
}

/** Autogenerated input type of TransferAccept */
export interface TransferAcceptInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  answers?: Maybe<Array<Scalars['JSON']>>;
}

/** Autogenerated return type of AddOnCreate */
export interface AddOnCreatePayload {
  addOn?: Maybe<AddOn>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Error>>;
}

/** Autogenerated input type of AddOnCreate */
export interface AddOnCreateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  addOn: AddOnInputType;
}

export interface AddOnInputType {
  id?: Maybe<Scalars['ID']>;
  hostId?: Maybe<Scalars['ID']>;
  taxIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  eventIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  attributes?: Maybe<AddOnAttributes>;
}

export interface AddOnAttributes {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  currency?: Maybe<CurrencyCode>;
  hostPaysCommission?: Maybe<Scalars['Boolean']>;
  rates?: Maybe<Array<Maybe<AddOnRateInputType>>>;
  images?: Maybe<Array<Maybe<ImageInputType>>>;
}

/** Properties for AddOnRate mutation */
export interface AddOnRateInputType {
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<AddOnRateAttributes>;
}

/** Shared updatable AddOnRate attributes */
export interface AddOnRateAttributes {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  state?: Maybe<RateState>;
  price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  optionName?: Maybe<Scalars['String']>;
  capacity?: Maybe<Scalars['Int']>;
  minQuantity?: Maybe<Scalars['Int']>;
  maxQuantity?: Maybe<Scalars['Int']>;
}

/** Autogenerated return type of AddOnDelete */
export interface AddOnDeletePayload {
  addOn?: Maybe<AddOn>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
}

/** Autogenerated input type of AddOnDelete */
export interface AddOnDeleteInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  hostId?: Maybe<Scalars['ID']>;
}

/** Autogenerated return type of AddOnUpdate */
export interface AddOnUpdatePayload {
  addOn?: Maybe<AddOn>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Error>>;
}

/** Autogenerated input type of AddOnUpdate */
export interface AddOnUpdateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  addOn: AddOnInputType;
}

/** Autogenerated return type of TaxCreate */
export interface TaxCreatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  tax?: Maybe<Tax>;
}

/** Autogenerated input type of TaxCreate */
export interface TaxCreateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  tax: TaxInputType;
}

/** Properties for Tax mutation */
export interface TaxInputType {
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<TaxAttributesType>;
}

/** Attributes for Tax mutation */
export interface TaxAttributesType {
  name?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Float']>;
  taxId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
}

/** Autogenerated return type of OrderItemCheckIn */
export interface OrderItemCheckInPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderItem?: Maybe<OrderItem>;
}

/** Autogenerated input type of OrderItemCheckIn */
export interface OrderItemCheckInInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of OrderItemCheckOut */
export interface OrderItemCheckOutPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderItem?: Maybe<OrderItem>;
}

/** Autogenerated input type of OrderItemCheckOut */
export interface OrderItemCheckOutInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of ExternalMetadataUpdate */
export interface ExternalMetadataUpdatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderItem?: Maybe<OrderItem>;
}

/** Autogenerated input type of ExternalMetadataUpdate */
export interface ExternalMetadataUpdateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  externalMetadata: Scalars['String'];
}

/** Autogenerated return type of OrderItemResend */
export interface OrderItemResendPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  orderItem: OrderItem;
}

/** Autogenerated input type of OrderItemResend */
export interface OrderItemResendInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of OrderItemAttendeeInfoChange */
export interface OrderItemAttendeeInfoChangePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderItem?: Maybe<OrderItem>;
}

/** Autogenerated input type of OrderItemAttendeeInfoChange */
export interface OrderItemAttendeeInfoChangeInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  answers: Array<AnswerInputType>;
  newAnswers: Array<NewAnswerInputType>;
}

/** Input type for an answer. */
export interface AnswerInputType {
  id: Scalars['ID'];
  value?: Maybe<Scalars['Any']>;
}


/** Input type for a new answer. */
export interface NewAnswerInputType {
  questionId: Scalars['ID'];
  value?: Maybe<Scalars['Any']>;
}

/** Autogenerated return type of OrderResend */
export interface OrderResendPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  order: Order;
}

/** Autogenerated input type of OrderResend */
export interface OrderResendInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  receiptOnly?: Maybe<Scalars['Boolean']>;
}

/** Autogenerated return type of OrderBuyerInfoChange */
export interface OrderBuyerInfoChangePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<Order>;
}

/** Autogenerated input type of OrderBuyerInfoChange */
export interface OrderBuyerInfoChangeInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  answers: Array<AnswerInputType>;
  newAnswers: Array<NewAnswerInputType>;
}

/** Autogenerated return type of MarkInvoiceAsPaid */
export interface MarkInvoiceAsPaidPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  order: Order;
}

/** Autogenerated input type of MarkInvoiceAsPaid */
export interface MarkInvoiceAsPaidInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of OrderRefund */
export interface OrderRefundPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<Order>;
}

/** Autogenerated input type of OrderRefund */
export interface OrderRefundInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  orderItemRefundDatas: Array<OrderItemRefundData>;
  totalReturning: Scalars['Int'];
  transactionRefund: Scalars['Boolean'];
  cancelNoRefund: Scalars['Boolean'];
}

/** Autogenerated return type of OrderTimeSlotUpdate */
export interface OrderTimeSlotUpdatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<Order>;
}

/** Autogenerated input type of OrderTimeSlotUpdate */
export interface OrderTimeSlotUpdateInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  timeSlotId: Scalars['ID'];
}

/** Autogenerated return type of OrderUpgrade */
export interface OrderUpgradePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<Order>;
}

/** Autogenerated input type of OrderUpgrade */
export interface OrderUpgradeInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  answers: Array<QuestionInputType>;
  upgrades: Array<UpgradeInputType>;
}

/** Input type for an question. */
export interface QuestionInputType {
  name: Scalars['String'];
  value?: Maybe<Scalars['Any']>;
}

/** Properties for OrderUpgrade mutation */
export interface UpgradeInputType {
  orderItemId: Scalars['ID'];
  newRateId: Scalars['ID'];
  answers: Array<QuestionInputType>;
}

/** Autogenerated return type of OrderApprove */
export interface OrderApprovePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<Order>;
}

/** Autogenerated input type of OrderApprove */
export interface OrderApproveInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

/** Autogenerated return type of OrderDecline */
export interface OrderDeclinePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<Order>;
}

/** Autogenerated input type of OrderDecline */
export interface OrderDeclineInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}
