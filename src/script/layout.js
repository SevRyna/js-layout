export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

export const createImg = (pathName, className) => {
  const elem = document.createElement('img')

  elem.setAttribute('src', pathName)

  if (className) {
    elem.className = className
  }

  return elem
}

export const createRadio = (tag, className, text) => {
  //tag = input
  const elem = document.createElement(tag)

  elem.setAttribute('type', 'radio')

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/header__back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/svg/header__avatar.svg',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'post__header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img', '')

    //console.log(Object.entries(params))

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    // button.append(img)
    button.insertAdjacentElement('beforeend', img)

    // header.append(button)
    header.insertAdjacentElement('beforeend', button)
  })

  return header
}

export const createButList = () => {
  const butList = createElement('div', 'butList')

  const button = createElement('button', 'button btnTab')
  button.innerHTML = 'База знань'
  butList.insertAdjacentElement('beforeend', button)

  const button2 = createElement(
    'button',
    'button btnTab active',
  )
  button2.innerHTML = 'Iнформація'
  butList.insertAdjacentElement('beforeend', button2)

  console.log(butList)

  return butList
}
