export const ucwords = (str: string|null): string => {
  return (str && capitalizeHelper(str, true, true)) || ''
}

export const generateWaURL = (name: string): string => {
  const message = encodeURIComponent(`Hai, saya tertarik dengan ${name}. Bisakah Anda memberi saya rincian lebih lanjut?`)
  return `https://api.whatsapp.com/send?phone=628981203131&text=${message}`
}

export function getInitials (fullName: string) {
  const [firstName, ...restNames] = fullName.toUpperCase().trim().split(' ')

  if (!restNames.length) {
    return firstName.substring(0, 2)
  }

  const firstNameInitial = firstName[0]
  const lastNameInitial = restNames.pop()![0]

  return `${firstNameInitial}${lastNameInitial}`
}

function capitalizeHelper (str: string, lc: boolean, all?: boolean): string {
  if (all) {
    return str.split(' ')
      .map(word => capitalizeHelper(word, lc))
      .join(' ')
      .split('-')
      .map(word => capitalizeHelper(word, false))
      .join('-')
  } else {
    return lc
      ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
      : str.charAt(0).toUpperCase() + str.slice(1)
  }
}
