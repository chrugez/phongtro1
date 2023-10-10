import moment from 'moment'

export const checkStatus = (datetime) => moment(datetime, process.env.REACT_APP_FORMAT_DATE).isSameOrAfter(new Date().toDateString())