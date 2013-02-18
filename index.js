(function() {

  exports.options = {
    "totalCount": null,
    "CountOnPage": 5,
    "selfPage": 1,
    "totalPage": null,
    "HTML": ''
  };

  exports.init = function(compound) {
    var _this = this;
    if (void 0 === compound.helpers.HelperSet) {
      return console.log('Sorry, my Lord, i can`t create a helper. Maybe, this object isn`t Compound?');
    } else {
      console.log('Paginator ready to die for my Lord!');
      return compound.helpers.HelperSet.prototype.paginator = function(totalCount, selfPage, CountOnPage) {
        return _this.showPaginaor(totalCount, selfPage, CountOnPage);
      };
    }
  };

  exports.showPaginaor = function(totalCount, selfPage, CountOnPage) {
    if (!totalCount) {
      return console.log('My Lord, you forgot to give the "totalCount" in "paginator.showPaginaor()" method!');
    } else if (0 === totalCount) {
      return console.log('My lord, count of elements is 0, i can`t display on the page...');
    } else {
      this.options.totalCount = parseInt(totalCount);
      this.options.selfPage = parseInt(selfPage != null ? selfPage : this.options.selfPage);
      this.options.CountOnPage = parseInt(CountOnPage != null ? CountOnPage : this.options.CountOnPage);
      this.options.totalPage = Math.ceil(this.options.totalCount / this.options.CountOnPage);
      this.options.prevPage = this.options.selfPage - 1;
      if (this.options.prevPage <= 0) this.options.prevPage = 1;
      this.options.nextPage = this.options.selfPage + 1;
      if (this.options.nextPage > this.options.totalPage) {
        this.options.nextPage = this.options.totalPage;
      }
      return this.setHTML();
    }
  };

  exports.setHTML = function() {
    var activeClass, i, middle, middle_left, middle_right, _ref, _ref2, _ref3;
    this.HTML = '<div class="pagination">';
    this.HTML += '<ul>';
    this.HTML += '<li><a href="?page=' + this.options.prevPage + '">«</a></li>';
    if (this.options.totalPage > 10) {
      for (i = 1; i <= 3; i++) {
        activeClass = '';
        if (i === this.options.selfPage) activeClass = ' class="active"';
        this.HTML += '<li' + activeClass + '><a href="?page=' + i + '">' + i + '</a></li>';
      }
      if (this.options.selfPage > 3 && this.options.selfPage < (this.options.totalPage - 3)) {
        middle = this.options.selfPage;
      } else {
        middle = Math.round(this.options.totalPage / 2);
      }
      middle_left = middle - 2;
      if (middle_left <= 3) middle_left = 4;
      middle_right = middle + 2;
      if (middle_right >= this.options.totalPage - 3) {
        middle_right = this.options.totalPage - 4;
      }
      for (i = middle_left; middle_left <= middle_right ? i <= middle_right : i >= middle_right; middle_left <= middle_right ? i++ : i--) {
        activeClass = '';
        if (i === this.options.selfPage) activeClass = ' class="active"';
        this.HTML += '<li' + activeClass + '><a href="?page=' + i + '">' + i + '</a></li>';
      }
      for (i = _ref = this.options.totalPage - 3, _ref2 = this.options.totalPage; _ref <= _ref2 ? i <= _ref2 : i >= _ref2; _ref <= _ref2 ? i++ : i--) {
        activeClass = '';
        if (i === this.options.selfPage) activeClass = ' class="active"';
        this.HTML += '<li' + activeClass + '><a href="?page=' + i + '">' + i + '</a></li>';
      }
    } else {
      for (i = 1, _ref3 = this.options.totalPage; 1 <= _ref3 ? i <= _ref3 : i >= _ref3; 1 <= _ref3 ? i++ : i--) {
        activeClass = '';
        if (i === this.options.selfPage) activeClass = ' class="active"';
        this.HTML += '<li' + activeClass + '><a href="?page=' + i + '">' + i + '</a></li>';
      }
    }
    this.HTML += '<li><a href="?page=' + this.options.nextPage + '">»</a></li>';
    this.HTML += '</ul>';
    this.HTML += '</div>';
    return this.HTML;
  };

}).call(this);
