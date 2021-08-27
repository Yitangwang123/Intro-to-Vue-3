app.component('review-list', {
  props: {
    reviews: {
      type:Array,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="review-container">
    <h3>Review:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">{{ review.name }} gave it {{ review.rating }} star(s)
        <br/>
          "{{ review.review }}"
        <br/>
      </li>
    </ul>
  </div>`
})
