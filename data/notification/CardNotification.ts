type IData = {
  title: string;
  time: string;
  detail: string;
};

export type ICardNotification = {
  isIcon: boolean;
  data: IData;
};

const mockDataArray: ICardNotification[] = [
  {
    isIcon: true,
    data: {
      title: "Earnings",
      time: "3h ago",
      detail: "Casey Jones has sent a counter offer for Work Order No.375",
    },
  },
  {
    isIcon: true,
    data: {
      title: "Expense",
      time: "1d ago",
      detail: "You have a new expense report waiting for review",
    },
  },
  {
    isIcon: true,
    data: {
      title: "Notification",
      time: "5h ago",
      detail: "You have a new message from your client",
    },
  },
  {
    isIcon: true,
    data: {
      title: "Earnings",
      time: "2h ago",
      detail: "Work Order No.376 has been completed successfully",
    },
  },
  {
    isIcon: false,
    data: {
      title: "Notification",
      time: "4d ago",
      detail: "Your client has updated the project details",
    },
  },
];

export default mockDataArray;
