import dayjs from 'dayjs'

export const Date = {

}

export const Time = {

  now: (format = 'HH:mm') => {
    return dayjs().format(format)
  }
}