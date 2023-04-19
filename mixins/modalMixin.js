export const modalMixin = {
  methods: {
    showModal() {
      $('.js-modal').on('click', function (e) {
        e.preventDefault();
        var modal_attr = $(this).attr('data-modal');
        $('#' + modal_attr).addClass('open');
        $(this).addClass('td-choose');
      });
    },
    closeModal() {
      $('.modal-main .modal-block__close').on('click', function () {
        $('.modal-main').removeClass('open');

        if ($('.js-modal').hasClass('td-choose')) {
          $('.js-modal').removeClass('td-choose');
        }
      });
    },
    toggleModal() {
      this.showModal();
      this.closeModal();
    }
  }
};
