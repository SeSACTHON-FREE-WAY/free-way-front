export interface CoordinateProps {
  latitude: number;
  longitude: number;
}

export interface FacilitiesProps {
  [key: string]: boolean;
  elevator: boolean;
  wheelchairLift: boolean;
  disabledToilet: boolean;
  transitParkingLot: boolean;
  unmannedCivilApplicationIssuingMachine: boolean;
  currencyExchangeKiosk: boolean;
  trainTicketOffice: boolean;
  feedingRoom: boolean;
}

export interface ElevatorProps {
  elevatorId: number;
  elevatorCoordinate: CoordinateProps;
  elevatorStatus: '사용 가능' | '공사 중' | '알 수 없음';
}

export interface StationProps {
  lineId: number;
  stationId: number;
  stationName: string;
  stationStatus: string;
  availableElevatorsNumber?: number;
  coordinate: CoordinateProps;
}

export interface StationDetailProps {
  stationId: number;
  stationName: string;
  lineId: number;
  lineName: string;
  stationCoordinate: CoordinateProps;
  stationStatus: string;
  stationContact: string;
  stationImageUrl: string;
  nextStation: null;
  previousStation: null;
  facilities: FacilitiesProps;
  elevators: ElevatorProps[];
}

export interface RectangleCoordinateProps {
  sw: CoordinateProps;
  ne: CoordinateProps;
}

export interface LocalProps {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: number;
  id: number;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: number;
  y: number;
}

export interface StationTitleProps {
  title: string;
  line: number;
  color: string;
  type?: string;
}

export interface StationMakerProps {
  info: StationProps;
  isActive: boolean;
  level: number;
}