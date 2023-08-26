import { NavigatorScreenParams } from '@react-navigation/native';

type QueueDetailsParams = {
  name: string
};

type TicketParamList = {
  TiecktDetails: QueueDetailsParams | undefined;
  Tickets: undefined
};

type TRootParamList = {
  Home: NavigatorScreenParams<TicketParamList>;
  Profile: undefined,
  Tickets: undefined,
  Contact: undefined
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootParamList {}
  }
}

export default TicketParamList;