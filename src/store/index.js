import { createStore } from 'vuex'

import tour1 from '../assets/images/tours/tour-1.jpg'
import tour2 from '../assets/images/tours/tour-2.jpg'
import tour3 from '../assets/images/tours/tour-3.jpg'
import tour4 from '../assets/images/tours/tour-4.jpeg'
import tour5 from '../assets/images/tours/tour-5.jpg'


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
    ]
  },
  getters: {
    getTours: state => state.tours
  },
  mutations: {
    setTours(state, job) {
      state.tours.unshift(job)
    },
    handleDelete(state, tourId) {
      let tours = state.tours
      let newTours = tours.filter(tour => {
        return tour.id !== Number(tourId)
      })

      state.tours = newTours
    }
  },
  actions: {
    updateTours({commit}, tour) {
      commit('setTours', tour)
    },
    deleteTour({commit}, tourId) {
      commit('handleDelete', tourId)
    }
  }
})
