export const collapseMixin = {
  mounted () {
    $('.js-show-acc2').click(function () {
      $(this).toggleClass('on')
      $('.js-ct-acc').slideToggle()
    })
  }
}
