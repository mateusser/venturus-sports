export const frequency = (value) => {
  const description = {
    '0': 'Never',
    '1': 'Sometimes',
    '2': 'Always'
  }
  return description[value] ? description[value] : 'Error - not found'
}

export const dayOfTheWeek = (arr) => {
  // special cases
  if (arr[0] && !arr[1] && !arr[2] && !arr[3] && !arr[4] && !arr[5] && arr[6]) {
    return 'Weekends'
  }
  if (!arr[0] && arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && !arr[6]) {
    return 'Week days'
  }

  const dotw = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const days = arr.reduce((acc, cur, idx) => {
    if (cur) acc.push(dotw[idx])
    return acc
  }, [])

  return days.join(', ')
}
