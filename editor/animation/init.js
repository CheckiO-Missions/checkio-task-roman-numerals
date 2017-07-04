requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        var $tryit;
        var io = new extIO({
            functions: {
                js: 'romanNumerals',
                python: 'checkio'
            },
            tryit:function (this_e) {
                $tryit = $(this_e.extSetHtmlTryIt(this_e.getTemplate('tryit')));

                $tryit.find('.bn-check').click(function (e) {
                    var $input = $tryit.find(".input-number");
                    var data = parseInt($input.val());
                    if (!data || isNaN(data)) {
                        $input.val(1);
                        data = 1;
                    }
                    if (data > 3999) {
                        $input.val(3999);
                        data = 3999;
                    }
                    this_e.extSendToConsoleCheckiO(data)
                    e.stopPropagation();
                    return false;
                });
            },
            retConsole: function (ret) {
                $tryit.find(".checkio-result-in").html(ret);
            }
        });
        io.start();
    }
);
