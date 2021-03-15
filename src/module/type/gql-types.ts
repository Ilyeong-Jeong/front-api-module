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
  uuid: any;
  timestamptz: any;
  Date: any;
  ObjectID: any;
}

export interface Query {
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  capsules?: Maybe<Array<Maybe<Capsule>>>;
  capsulesPast?: Maybe<Array<Maybe<Capsule>>>;
  capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>;
  capsule?: Maybe<Capsule>;
  company?: Maybe<Info>;
  cores?: Maybe<Array<Maybe<Core>>>;
  coresPast?: Maybe<Array<Maybe<Core>>>;
  coresUpcoming?: Maybe<Array<Maybe<Core>>>;
  core?: Maybe<Core>;
  dragons?: Maybe<Array<Maybe<Dragon>>>;
  dragon?: Maybe<Dragon>;
  histories?: Maybe<Array<Maybe<History>>>;
  historiesResult?: Maybe<HistoriesResult>;
  history?: Maybe<History>;
  landpads?: Maybe<Array<Maybe<Landpad>>>;
  landpad?: Maybe<Landpad>;
  launches?: Maybe<Array<Maybe<Launch>>>;
  launchesPast?: Maybe<Array<Maybe<Launch>>>;
  launchesPastResult?: Maybe<LaunchesPastResult>;
  launchesUpcoming?: Maybe<Array<Maybe<Launch>>>;
  launch?: Maybe<Launch>;
  launchLatest?: Maybe<Launch>;
  launchNext?: Maybe<Launch>;
  launchpads?: Maybe<Array<Maybe<Launchpad>>>;
  launchpad?: Maybe<Launchpad>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  missionsResult?: Maybe<MissionResult>;
  mission?: Maybe<Mission>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  payload?: Maybe<Payload>;
  roadster?: Maybe<Roadster>;
  rockets?: Maybe<Array<Maybe<Rocket>>>;
  rocketsResult?: Maybe<RocketsResult>;
  rocket?: Maybe<Rocket>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  shipsResult?: Maybe<ShipsResult>;
  ship?: Maybe<Ship>;
}


export interface QueryUsersArgs {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
}


export interface QueryUsers_AggregateArgs {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
}


export interface QueryUsers_By_PkArgs {
  id: Scalars['uuid'];
}


export interface QueryCapsulesArgs {
  find?: Maybe<CapsulesFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryCapsulesPastArgs {
  find?: Maybe<CapsulesFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryCapsulesUpcomingArgs {
  find?: Maybe<CapsulesFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryCapsuleArgs {
  id: Scalars['ID'];
}


export interface QueryCoresArgs {
  find?: Maybe<CoresFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryCoresPastArgs {
  find?: Maybe<CoresFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryCoresUpcomingArgs {
  find?: Maybe<CoresFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryCoreArgs {
  id: Scalars['ID'];
}


export interface QueryDragonsArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QueryDragonArgs {
  id: Scalars['ID'];
}


export interface QueryHistoriesArgs {
  find?: Maybe<HistoryFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryHistoriesResultArgs {
  find?: Maybe<HistoryFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryHistoryArgs {
  id: Scalars['ID'];
}


export interface QueryLandpadsArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QueryLandpadArgs {
  id: Scalars['ID'];
}


export interface QueryLaunchesArgs {
  find?: Maybe<LaunchFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryLaunchesPastArgs {
  find?: Maybe<LaunchFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryLaunchesPastResultArgs {
  find?: Maybe<LaunchFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryLaunchesUpcomingArgs {
  find?: Maybe<LaunchFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryLaunchArgs {
  id: Scalars['ID'];
}


export interface QueryLaunchLatestArgs {
  offset?: Maybe<Scalars['Int']>;
}


export interface QueryLaunchNextArgs {
  offset?: Maybe<Scalars['Int']>;
}


export interface QueryLaunchpadsArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QueryLaunchpadArgs {
  id: Scalars['ID'];
}


export interface QueryMissionsArgs {
  find?: Maybe<MissionsFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QueryMissionsResultArgs {
  find?: Maybe<MissionsFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QueryMissionArgs {
  id: Scalars['ID'];
}


export interface QueryPayloadsArgs {
  find?: Maybe<PayloadsFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryPayloadArgs {
  id: Scalars['ID'];
}


export interface QueryRocketsArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QueryRocketsResultArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QueryRocketArgs {
  id: Scalars['ID'];
}


export interface QueryShipsArgs {
  find?: Maybe<ShipsFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryShipsResultArgs {
  find?: Maybe<ShipsFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryShipArgs {
  id: Scalars['ID'];
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Rocket = 'rocket',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Twitter = 'twitter'
}

/** ordering options when selecting data from "users" */
export interface Users_Order_By {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  rocket?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface Users_Bool_Exp {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  rocket?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  twitter?: Maybe<String_Comparison_Exp>;
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export interface Uuid_Comparison_Exp {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
}


/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface String_Comparison_Exp {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface Timestamptz_Comparison_Exp {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
}


/** columns and relationships of "users" */
export interface Users {
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp: Scalars['timestamptz'];
  twitter?: Maybe<Scalars['String']>;
}

/** aggregated selection of "users" */
export interface Users_Aggregate {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
}

/** aggregate fields of "users" */
export interface Users_Aggregate_Fields {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
}


/** aggregate fields of "users" */
export interface Users_Aggregate_FieldsCountArgs {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** aggregate max on columns */
export interface Users_Max_Fields {
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  twitter?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface Users_Min_Fields {
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  twitter?: Maybe<Scalars['String']>;
}

export interface CapsulesFind {
  id?: Maybe<Scalars['ID']>;
  landings?: Maybe<Scalars['Int']>;
  mission?: Maybe<Scalars['String']>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}


export interface Capsule {
  id?: Maybe<Scalars['ID']>;
  landings?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dragon?: Maybe<Dragon>;
}

export interface CapsuleMission {
  flight?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

export interface Dragon {
  active?: Maybe<Scalars['Boolean']>;
  crew_capacity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Distance>;
  dry_mass_kg?: Maybe<Scalars['Int']>;
  dry_mass_lb?: Maybe<Scalars['Int']>;
  first_flight?: Maybe<Scalars['String']>;
  heat_shield?: Maybe<DragonHeatShield>;
  height_w_trunk?: Maybe<Distance>;
  id?: Maybe<Scalars['ID']>;
  launch_payload_mass?: Maybe<Mass>;
  launch_payload_vol?: Maybe<Volume>;
  name?: Maybe<Scalars['String']>;
  orbit_duration_yr?: Maybe<Scalars['Int']>;
  pressurized_capsule?: Maybe<DragonPressurizedCapsule>;
  return_payload_mass?: Maybe<Mass>;
  return_payload_vol?: Maybe<Volume>;
  sidewall_angle_deg?: Maybe<Scalars['Float']>;
  thrusters?: Maybe<Array<Maybe<DragonThrust>>>;
  trunk?: Maybe<DragonTrunk>;
  type?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
}

export interface Distance {
  feet?: Maybe<Scalars['Float']>;
  meters?: Maybe<Scalars['Float']>;
}

export interface DragonHeatShield {
  dev_partner?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  size_meters?: Maybe<Scalars['Float']>;
  temp_degrees?: Maybe<Scalars['Int']>;
}

export interface Mass {
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
}

export interface Volume {
  cubic_feet?: Maybe<Scalars['Int']>;
  cubic_meters?: Maybe<Scalars['Int']>;
}

export interface DragonPressurizedCapsule {
  payload_volume?: Maybe<Volume>;
}

export interface DragonThrust {
  amount?: Maybe<Scalars['Int']>;
  fuel_1?: Maybe<Scalars['String']>;
  fuel_2?: Maybe<Scalars['String']>;
  pods?: Maybe<Scalars['Int']>;
  thrust?: Maybe<Force>;
  type?: Maybe<Scalars['String']>;
}

export interface Force {
  kN?: Maybe<Scalars['Float']>;
  lbf?: Maybe<Scalars['Float']>;
}

export interface DragonTrunk {
  cargo?: Maybe<DragonTrunkCargo>;
  trunk_volume?: Maybe<Volume>;
}

export interface DragonTrunkCargo {
  solar_array?: Maybe<Scalars['Int']>;
  unpressurized_cargo?: Maybe<Scalars['Boolean']>;
}

export interface Info {
  ceo?: Maybe<Scalars['String']>;
  coo?: Maybe<Scalars['String']>;
  cto_propulsion?: Maybe<Scalars['String']>;
  cto?: Maybe<Scalars['String']>;
  employees?: Maybe<Scalars['Int']>;
  founded?: Maybe<Scalars['Int']>;
  founder?: Maybe<Scalars['String']>;
  headquarters?: Maybe<Address>;
  launch_sites?: Maybe<Scalars['Int']>;
  links?: Maybe<InfoLinks>;
  name?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  test_sites?: Maybe<Scalars['Int']>;
  valuation?: Maybe<Scalars['Float']>;
  vehicles?: Maybe<Scalars['Int']>;
}

export interface Address {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
}

export interface InfoLinks {
  elon_twitter?: Maybe<Scalars['String']>;
  flickr?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
}

export interface CoresFind {
  asds_attempts?: Maybe<Scalars['Int']>;
  asds_landings?: Maybe<Scalars['Int']>;
  block?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  missions?: Maybe<Scalars['String']>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  rtls_attempts?: Maybe<Scalars['Int']>;
  rtls_landings?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  water_landing?: Maybe<Scalars['Boolean']>;
}

export interface Core {
  asds_attempts?: Maybe<Scalars['Int']>;
  asds_landings?: Maybe<Scalars['Int']>;
  block?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  rtls_attempts?: Maybe<Scalars['Int']>;
  rtls_landings?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  water_landing?: Maybe<Scalars['Boolean']>;
}

export interface HistoryFind {
  end?: Maybe<Scalars['Date']>;
  flight_number?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  start?: Maybe<Scalars['Date']>;
}

export interface History {
  details?: Maybe<Scalars['String']>;
  event_date_unix?: Maybe<Scalars['Date']>;
  event_date_utc?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
  flight?: Maybe<Launch>;
}

export interface Link {
  article?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
}

export interface Launch {
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_tentative?: Maybe<Scalars['Boolean']>;
  launch_date_local?: Maybe<Scalars['Date']>;
  launch_date_unix?: Maybe<Scalars['Date']>;
  launch_date_utc?: Maybe<Scalars['Date']>;
  launch_site?: Maybe<LaunchSite>;
  launch_success?: Maybe<Scalars['Boolean']>;
  launch_year?: Maybe<Scalars['String']>;
  links?: Maybe<LaunchLinks>;
  mission_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_name?: Maybe<Scalars['String']>;
  rocket?: Maybe<LaunchRocket>;
  static_fire_date_unix?: Maybe<Scalars['Date']>;
  static_fire_date_utc?: Maybe<Scalars['Date']>;
  telemetry?: Maybe<LaunchTelemetry>;
  tentative_max_precision?: Maybe<Scalars['String']>;
  upcoming?: Maybe<Scalars['Boolean']>;
  ships?: Maybe<Array<Maybe<Ship>>>;
}

export interface LaunchSite {
  site_id?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
  site_name?: Maybe<Scalars['String']>;
}

export interface LaunchLinks {
  article_link?: Maybe<Scalars['String']>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_patch_small?: Maybe<Scalars['String']>;
  mission_patch?: Maybe<Scalars['String']>;
  presskit?: Maybe<Scalars['String']>;
  reddit_campaign?: Maybe<Scalars['String']>;
  reddit_launch?: Maybe<Scalars['String']>;
  reddit_media?: Maybe<Scalars['String']>;
  reddit_recovery?: Maybe<Scalars['String']>;
  video_link?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
}

export interface LaunchRocket {
  fairings?: Maybe<LaunchRocketFairings>;
  first_stage?: Maybe<LaunchRocketFirstStage>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  rocket?: Maybe<Rocket>;
  second_stage?: Maybe<LaunchRocketSecondStage>;
}

export interface LaunchRocketFairings {
  recovered?: Maybe<Scalars['Boolean']>;
  recovery_attempt?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
  ship?: Maybe<Scalars['String']>;
}

export interface LaunchRocketFirstStage {
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
}

export interface LaunchRocketFirstStageCore {
  block?: Maybe<Scalars['Int']>;
  core?: Maybe<Core>;
  flight?: Maybe<Scalars['Int']>;
  gridfins?: Maybe<Scalars['Boolean']>;
  land_success?: Maybe<Scalars['Boolean']>;
  landing_intent?: Maybe<Scalars['Boolean']>;
  landing_type?: Maybe<Scalars['String']>;
  landing_vehicle?: Maybe<Scalars['String']>;
  legs?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
}

export interface Rocket {
  active?: Maybe<Scalars['Boolean']>;
  boosters?: Maybe<Scalars['Int']>;
  company?: Maybe<Scalars['String']>;
  cost_per_launch?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Distance>;
  engines?: Maybe<RocketEngines>;
  first_flight?: Maybe<Scalars['Date']>;
  first_stage?: Maybe<RocketFirstStage>;
  height?: Maybe<Distance>;
  id?: Maybe<Scalars['ID']>;
  landing_legs?: Maybe<RocketLandingLegs>;
  mass?: Maybe<Mass>;
  name?: Maybe<Scalars['String']>;
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  second_stage?: Maybe<RocketSecondStage>;
  stages?: Maybe<Scalars['Int']>;
  success_rate_pct?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
}

export interface RocketEngines {
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  engine_loss_max?: Maybe<Scalars['String']>;
  propellant_1?: Maybe<Scalars['String']>;
  propellant_2?: Maybe<Scalars['String']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_vacuum?: Maybe<Force>;
  thrust_to_weight?: Maybe<Scalars['Float']>;
}

export interface RocketFirstStage {
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  reusable?: Maybe<Scalars['Boolean']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_vacuum?: Maybe<Force>;
}

export interface RocketLandingLegs {
  number?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
}

export interface RocketPayloadWeight {
  id?: Maybe<Scalars['String']>;
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

export interface RocketSecondStage {
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  payloads?: Maybe<RocketSecondStagePayloads>;
  thrust?: Maybe<Force>;
}

export interface RocketSecondStagePayloads {
  option_1?: Maybe<Scalars['String']>;
  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
}

export interface RocketSecondStagePayloadCompositeFairing {
  height?: Maybe<Distance>;
  diameter?: Maybe<Distance>;
}

export interface LaunchRocketSecondStage {
  block?: Maybe<Scalars['Int']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
}

export interface Payload {
  customers?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  manufacturer?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orbit_params?: Maybe<PayloadOrbitParams>;
  orbit?: Maybe<Scalars['String']>;
  payload_mass_kg?: Maybe<Scalars['Float']>;
  payload_mass_lbs?: Maybe<Scalars['Float']>;
  payload_type?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['Boolean']>;
}

export interface PayloadOrbitParams {
  apoapsis_km?: Maybe<Scalars['Float']>;
  arg_of_pericenter?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Date']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  mean_anomaly?: Maybe<Scalars['Float']>;
  mean_motion?: Maybe<Scalars['Float']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
}

export interface LaunchTelemetry {
  flight_club?: Maybe<Scalars['String']>;
}

export interface Ship {
  abs?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  course_deg?: Maybe<Scalars['Int']>;
  home_port?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  imo?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<ShipMission>>>;
  mmsi?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<ShipLocation>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  speed_kn?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  weight_kg?: Maybe<Scalars['Int']>;
  weight_lbs?: Maybe<Scalars['Int']>;
  year_built?: Maybe<Scalars['Int']>;
}

export interface ShipMission {
  flight?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface ShipLocation {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
}

export interface HistoriesResult {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<History>>>;
}

export interface Result {
  totalCount?: Maybe<Scalars['Int']>;
}

export interface Landpad {
  attempted_landings?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  landing_type?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
}

export interface Location {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
}

export interface LaunchFind {
  apoapsis_km?: Maybe<Scalars['Float']>;
  block?: Maybe<Scalars['Int']>;
  cap_serial?: Maybe<Scalars['String']>;
  capsule_reuse?: Maybe<Scalars['String']>;
  core_flight?: Maybe<Scalars['Int']>;
  core_reuse?: Maybe<Scalars['String']>;
  core_serial?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  eccentricity?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Date']>;
  epoch?: Maybe<Scalars['Date']>;
  fairings_recovered?: Maybe<Scalars['String']>;
  fairings_recovery_attempt?: Maybe<Scalars['String']>;
  fairings_reuse?: Maybe<Scalars['String']>;
  fairings_reused?: Maybe<Scalars['String']>;
  fairings_ship?: Maybe<Scalars['String']>;
  gridfins?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  land_success?: Maybe<Scalars['String']>;
  landing_intent?: Maybe<Scalars['String']>;
  landing_type?: Maybe<Scalars['String']>;
  landing_vehicle?: Maybe<Scalars['String']>;
  launch_date_local?: Maybe<Scalars['Date']>;
  launch_date_utc?: Maybe<Scalars['Date']>;
  launch_success?: Maybe<Scalars['String']>;
  launch_year?: Maybe<Scalars['String']>;
  legs?: Maybe<Scalars['String']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  manufacturer?: Maybe<Scalars['String']>;
  mean_motion?: Maybe<Scalars['Float']>;
  mission_id?: Maybe<Scalars['String']>;
  mission_name?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Scalars['Int']>;
  orbit?: Maybe<Scalars['String']>;
  payload_id?: Maybe<Scalars['String']>;
  payload_type?: Maybe<Scalars['String']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['String']>;
  rocket_id?: Maybe<Scalars['String']>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  second_stage_block?: Maybe<Scalars['String']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
  ship?: Maybe<Scalars['String']>;
  side_core1_reuse?: Maybe<Scalars['String']>;
  side_core2_reuse?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
  site_name?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  tbd?: Maybe<Scalars['String']>;
  tentative_max_precision?: Maybe<Scalars['String']>;
  tentative?: Maybe<Scalars['String']>;
}

export interface LaunchesPastResult {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<Launch>>>;
}

export interface Launchpad {
  attempted_launches?: Maybe<Scalars['Int']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  successful_launches?: Maybe<Scalars['Int']>;
  vehicles_launched?: Maybe<Array<Maybe<Rocket>>>;
  wikipedia?: Maybe<Scalars['String']>;
}

export interface MissionsFind {
  id?: Maybe<Scalars['ID']>;
  manufacturer?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  payload_id?: Maybe<Scalars['String']>;
}

export interface Mission {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
}

export interface MissionResult {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<Mission>>>;
}

export interface PayloadsFind {
  apoapsis_km?: Maybe<Scalars['Float']>;
  customer?: Maybe<Scalars['String']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Date']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  manufacturer?: Maybe<Scalars['String']>;
  mean_motion?: Maybe<Scalars['Float']>;
  nationality?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Scalars['Int']>;
  orbit?: Maybe<Scalars['String']>;
  payload_id?: Maybe<Scalars['ID']>;
  payload_type?: Maybe<Scalars['String']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['Boolean']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
}

export interface Roadster {
  apoapsis_au?: Maybe<Scalars['Float']>;
  details?: Maybe<Scalars['String']>;
  earth_distance_km?: Maybe<Scalars['Float']>;
  earth_distance_mi?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch_jd?: Maybe<Scalars['Float']>;
  inclination?: Maybe<Scalars['Float']>;
  launch_date_unix?: Maybe<Scalars['Date']>;
  launch_date_utc?: Maybe<Scalars['Date']>;
  launch_mass_kg?: Maybe<Scalars['Int']>;
  launch_mass_lbs?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Float']>;
  mars_distance_km?: Maybe<Scalars['Float']>;
  mars_distance_mi?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Scalars['Int']>;
  orbit_type?: Maybe<Scalars['Float']>;
  periapsis_arg?: Maybe<Scalars['Float']>;
  periapsis_au?: Maybe<Scalars['Float']>;
  period_days?: Maybe<Scalars['Float']>;
  semi_major_axis_au?: Maybe<Scalars['Float']>;
  speed_kph?: Maybe<Scalars['Float']>;
  speed_mph?: Maybe<Scalars['Float']>;
  wikipedia?: Maybe<Scalars['String']>;
}

export interface RocketsResult {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<Rocket>>>;
}

export interface ShipsFind {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  imo?: Maybe<Scalars['Int']>;
  mmsi?: Maybe<Scalars['Int']>;
  abs?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  weight_lbs?: Maybe<Scalars['Int']>;
  weight_kg?: Maybe<Scalars['Int']>;
  year_built?: Maybe<Scalars['Int']>;
  home_port?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  speed_kn?: Maybe<Scalars['Int']>;
  course_deg?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  successful_landings?: Maybe<Scalars['Int']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  mission?: Maybe<Scalars['String']>;
}

export interface ShipsResult {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<Ship>>>;
}

export interface Mutation {
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
}


export interface MutationDelete_UsersArgs {
  where: Users_Bool_Exp;
}


export interface MutationInsert_UsersArgs {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
}


export interface MutationUpdate_UsersArgs {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
}

/** response of any mutation on the table "users" */
export interface Users_Mutation_Response {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
}

/** input type for inserting data into table "users" */
export interface Users_Insert_Input {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  twitter?: Maybe<Scalars['String']>;
}

/** on conflict condition type for table "users" */
export interface Users_On_Conflict {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Rocket = 'rocket',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Twitter = 'twitter'
}

/** input type for updating data in table "users" */
export interface Users_Set_Input {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  twitter?: Maybe<Scalars['String']>;
}

export interface Subscription {
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}


export interface SubscriptionUsersArgs {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
}


export interface SubscriptionUsers_AggregateArgs {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
}


export interface SubscriptionUsers_By_PkArgs {
  id: Scalars['uuid'];
}

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

/** order by aggregate values of table "users" */
export interface Users_Aggregate_Order_By {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
}

/** order by max() on columns of table "users" */
export interface Users_Max_Order_By {
  name?: Maybe<Order_By>;
  rocket?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
}

/** order by min() on columns of table "users" */
export interface Users_Min_Order_By {
  name?: Maybe<Order_By>;
  rocket?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
}

/** input type for inserting array relation for remote table "users" */
export interface Users_Arr_Rel_Insert_Input {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
}

/** input type for inserting object relation for remote table "users" */
export interface Users_Obj_Rel_Insert_Input {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
}


export interface CoreMission {
  name?: Maybe<Scalars['String']>;
  flight?: Maybe<Scalars['Int']>;
}
