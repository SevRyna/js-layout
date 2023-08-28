import {
  createElement,
  createImg,
  createButList,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

// console.log(page)

const header = createHeader()

page.append(header)

const title = createElement('h1', 'post_title', 'Комьюніті')

page.append(title)

// const blogHeader = createElement('div', 'blog__header')
const blogHeader = createButList()

page.append(blogHeader)

let page_name = ''

const POST_LIST = [
  {
    category: [{ text: '', id: 1 }],
    // info: 'До... планувальники, наймаємо дизайнера ш готуємо ся до презентації',
    // date: '25.01',
    img: '/svg/greeting.svg',
    viewed: false,
  },
  {
    category: [{ text: '', id: 2 }],
    info: '<h2>Що таке база знань?</h2>База знань - база даних що містить правила виводу та інформацію про людський досвід та знання в деякій предметній галузі. В самонавчающихся системах база знаньтакож містить інформацію, що є результатом вирішення попередніх задач. ',
    // date: '24.01',
    img: false,
    viewed: true,
  },
  {
    category: [{ text: '', id: 1 }],
    // info: 'До... планувальники, наймаємо дизайнера ш готуємо ся до презентації',
    // date: '25.01',
    img: '/svg/greeting_button.svg',
    viewed: false,
    button: true,
  },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement('div', 'ancor')

    const postHeader = createElement('div', 'post__header')

    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        postData.button ? 'button' : 'span',
        `post__category-list post__category--${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })

    // ======

    if (postData.img !== false) {
      const imgExists = createImg(postData.img, false)
      // ======
      postHeader.append(categoryList, imgExists)
    }

    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )

    // ======

    postHeader.append(categoryList, dateSpan)

    // ======

    const infoParagraph = createElement(
      'p',
      'post_info',
      postData.info,
    )
    post.append(postHeader, infoParagraph)

    postList.append(post)
  })

  return postList
}

// ======

const post = createPost()
console.log('post')
console.log(post)
page.append(post)
