function getVideoIdFromUrl() {
    return window.location.href.split('/')[4];
}

$(document).ready(function () {

    $('#show-analysis-checkbox').click(function () {
        $('.drawing-layer').toggle();
    });

    $('#show-all-detections').click(function () {
        $('#detected-objs-table').toggle();
        var currentDetsObserver = videoDetections.observers[0];
        var tableObserver = videoDetections.observers[1];
        if (tableObserver.isEnable) {
            tableObserver.disable();
            currentDetsObserver.enable();
        } else {
            tableObserver.enable();
            currentDetsObserver.disable();
        }
        $('#current-detected-objs').toggle();
    });

    $('#colors-checkbox').click(function () {
        videoDetections.toggleUseColor();
        if ($(this).is(':checked')) {
            var abRateDiv = $('#abnormality-rate-cb');
            if ($(abRateDiv).is(':checked')) {
                $(abRateDiv).click();
                videoDetections.useAbnormalityRate = false;
            }
        }
    });

    $('#suspicious-popup').click(function () {
        videoDetections.observers[5].throwPopups = !videoDetections.observers[5].throwPopups;
        var selectedDetList = $.map(videoDetections.selectedDetections, function (value) {
            return [value];
        });
        videoDetections.updateState({'abChangingDetections': selectedDetList.reverse()})
    });

    $('#abnormality-rate-cb').click(function () {
        $('#abnormality-slider-div').toggle();
        videoDetections.toggleUseAbnormalityRate();
        if ($(this).is(':checked')) {
            var useColors = $('#colors-checkbox');
            if ($(useColors).is(':checked')) {
                $(useColors).click();
            }
        }
    });

    $('#abnormality-input').on('input', function () {
        $("#abnormality-slider").slider("option", "value", this.value);
        videoDetections.alarmAbnormalRate = parseFloat(this.value);
        videoDetections.updateState();
    });


    function refreshAnalysisProgress() {
        $.getJSON("/videos/" + getVideoIdFromUrl() + "/analyze/").done(function (analysis) {
            //Get analysis status from the iterable list
            analysis = analysis[0].fields;
            var stateMsg = $('#state_message');
            var analyzingPb = $('#analyzing-pb');
            if (analysis.is_finished) {
                $(stateMsg).parent().append('<a class="btn btn-success" href="'
                    + window.location.href + '">Reload</a>');
                $(analyzingPb).hide();
                $(stateMsg).text(analysis.state_message);
                return;
            }

            //Update the progressbar
            $(stateMsg).text(analysis.state_message);
            $(analyzingPb).find('.progress-bar')
                .attr('aria-valuenow', analysis.progress)
                .css('width', analysis.progress + '%');
            $(document).find('#analyzing-pb span').text(analysis.progress + '% Complete');
            window.setTimeout(refreshAnalysisProgress, 300);
        });
    }

    refreshAnalysisProgress();

    $('#analyze-btn').click(function () {
        // We change the button for the "Analyzing label and the progress bar
        $('#analyze-btn').hide();
        $('#analyzing-pb').show();
        // Make the call to makeanalysis
        $.post("/videos/" + getVideoIdFromUrl() + "/makeanalyze/", function () {
            refreshAnalysisProgress();
        });
        return false;
    });

});