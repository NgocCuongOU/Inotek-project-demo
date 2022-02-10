import { createStore } from 'vuex'

import tour1 from '../assets/images/tours/tour-1.jpg'
import tour2 from '../assets/images/tours/tour-2.jpg'
import tour3 from '../assets/images/tours/tour-3.jpg'
import tour4 from '../assets/images/tours/tour-4.jpeg'
import tour5 from '../assets/images/tours/tour-5.jpg'
import blogImg1 from '../assets/images/blogs/trip-1.png'
import blogImg2 from '../assets/images/blogs/trip-2.png'
import blogImg3 from '../assets/images/blogs/trip-3.png'
import blog1 from '../assets/images/blog/single_blog_1.png'
import blog2 from '../assets/images/blog/single_blog_2.png'
import blog3 from '../assets/images/blog/single_blog_3.png'

export default createStore({
  state: {
    tours: [
      {
        id: 1,
        title: "Tour riêng tham quan Singgapore cùng với nhiếp ảnh gia chuyên nghiệp",
        img: tour1,
        country: "Việt Nam",
        countDate: 4,
        price: 400
      },
      {
        id: 2,
        title: "Tour riêng với nhiếp ảnh gia chuyên nghiệp tại Gardens by the Bays / vịnh Marina",
        img: tour5,
        country: "Laos",
        countDate: 2,
        price: 4200
      },
      {
        id: 3,
        title: "Tour riêng với nhiếp ảnh gia chuyên nghiệp tại Haji Lane / Kampong Glam",
        img: tour3,
        country: "Việt Nam",
        countDate: 5,
        price: 500
      },
      {
        id: 4,
        title: "Tour hang Batu và cao nguyên Genting 1 ngày",
        img: tour4,
        country: "Việt Nam",
        countDate: 1,
        price: 200
      },
      {
        id: 5,
        title: "Ăn tối trên du thuyền tại thành phố KK",
        img: tour2,
        country: "Trung Quốc",
        countDate: 4,
        price: 1400
      },
      {
        id: 6,
        title: "Tour hang Batu và cao nguyên Genting 1 ngày",
        img: tour3,
        country: "Việt Nam",
        countDate: 4,
        price: 400
      },
      {
        id: 7,
        title: "Du lịch biển dừa",
        img: tour4,
        country: "Việt Nam",
        countDate: 4,
        price: 400
      },
      {
        id: 8,
        title: "Du lịch lang thang",
        img: tour1,
        country: "Việt Nam",
        countDate: 5,
        price: 4100
      },
      {
        id: 9,
        title: "Du lịch biển đảo",
        img: tour1,
        country: "Việt Nam",
        countDate: 4,
        price: 400
      }
    ],
    recentBlogs: [
      { 
        id: 1, 
        title: 'Đi Du Lịch Cùng Gia Đình cần những Kinh Nghiệm gì?', 
        image: blogImg1, 
        date: '12/12/2021' 
      },
      { 
        id: 2, 
        title: 'Cho Trẻ Em Đi Du lịch cần Lưu Ý gì? Trẻ đi Nước Ngoài thì sao?', 
        image: blogImg2, 
        date: '2/12/2021' 
      },
      { 
        id: 3, 
        title: 'Review tour Hà Giang 2 ngày – Công ty Hà Giang trẻ', 
        image: blogImg3, 
        date: '3/12/2021' 
      }
    ],
    blogs: [
      {
        id: '2',
        title: 'Sinh viên IT mua máy tính nào tốt? Cách chọn và dùng máy tính cho tân sinh viên',
        image: blog2,
        description: 'Có rất nhiều bạn tân sinh viên hỏi về việc mua máy tính nào tốt? Tầm khoảng bao nhiêu tiền? Máy bàn hay laptop? Vậy nên mình viết bài này chia sẻ chút kinh nghiệm mua và dùng máy hồi còn sinh viên của mình. Tất nhiên đây chỉ là quan điểm cá nhân, các bạn đọc để tham khảo.',
        author: 'Bùi Văn Nguyện',
      },
      {
        id: '1',
        title: 'Học khóa học lập trình miễn phí hay trả phí?',
        image: blog1,
        description: 'Hiện nay có nhiều khóa học miễn phí và cả trả phí. Vì vậy có rất nhiều bạn băn khoăn rằng chọn khóa học nào cho phù hợp để đạt hiệu quả học tập cao nhất.',
        author: 'Cao Ngoc Cuong',
      },
      {
        id: '3',
        title: 'Bắt đầu viết blog, viết blog được và mất gì?',
        image: blog3,
        description: 'Có lẽ bạn cũng đang muốn bắt đầu viết một blog của riêng mình. Vậy trong bài viết này mình sẽ chia sẻ về những điều bạn sẽ được và mất khi bắt đầu viết một blog.',
        author: 'Lập trình cuộc sống',
      },
    ]
  },
  getters: {
    getTours: state => state.tours,
    getBlogs: state => state.recentBlogs,
    getBlogsPage: state => state.blogs
  },
  mutations: {
    setTours(state, tour: {
      id: number;
      title: string;
      img: string;
      country: string;
      countDate: number;
      price: number;
    }): void {
      state.tours.unshift(tour)
    },
    handleDelete(state, tourId: number) {
      let tours: {
        id: number;
        title: string;
        img: string;
        country: string;
        countDate: number;
        price: number;
      }[] = state.tours
      let newTours = tours.filter(tour => {
        return tour.id !== Number(tourId)
      })

      state.tours = newTours
    }
  },
  actions: {
    updateTours({commit}, tour: {
      id: number;
      title: string;
      img: string;
      country: string;
      countDate: number;
      price: number;
    }) {
      commit('setTours', tour)
    },
    deleteTour({commit}, tourId: number) {
      commit('handleDelete', tourId)
    }
  }
})
