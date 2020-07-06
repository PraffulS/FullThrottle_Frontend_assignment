export const table_headers = [
  { key: "id", label: "User Id", flex: "1" },
  { key: "real_name", label: "Name", flex: "2" },
  { key: "tz", label: "TimeZone", flex: "1.5" },
  { key: null, label: "Status", flex: "1" },
  { key: null, label: "Actions", flex: "1" }
];

export const api_data = {
  ok: true,
  members: [
    {
      id: "W012A3CDE",
      real_name: "Egon Spengler",
      tz: "America/Los_Angeles",
      activity_periods: [
        {
          start_time: "Feb 1 2020  1:33PM",
          end_time: "Feb 1 2020 1:54PM"
        },
        {
          start_time: "Mar 1 2020  11:11AM",
          end_time: "Mar 1 2020 2:00PM"
        },
        {
          start_time: "Mar 16 2020  5:33PM",
          end_time: "Mar 16 2020 8:02PM"
        }
      ]
    },
    {
      id: "W07QCRPA4",
      real_name: "Glinda Southgood",
      tz: "Asia/Kolkata",
      activity_periods: [
        {
          start_time: "Feb 1 2020  1:33PM",
          end_time: "Feb 1 2020 1:54PM"
        },
        {
          start_time: "Mar 1 2020  11:11AM",
          end_time: "Mar 1 2020 2:00PM"
        },
        {
          start_time: "Mar 16 2020  5:33PM",
          end_time: "Mar 16 2020 8:02PM"
        }
      ]
    },
    {
      id: "W07QCRPA4",
      real_name: "Glinda Southgood",
      tz: "Asia/Kolkata",
      activity_periods: []
    }
  ]
};
