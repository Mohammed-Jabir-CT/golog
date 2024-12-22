import { Calendar as ReactCalendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "@/styles/custom-calendar.css";

const Calendar = () => {

  return <ReactCalendar showFixedNumberOfWeeks={true} tileClassName={['btn','btn-circle']}/>;
};

export default Calendar;
