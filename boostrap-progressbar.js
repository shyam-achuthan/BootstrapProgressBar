  (function($) {
    $.fn.bootstrapProgressBar = function() {
        
        var progressBar = function(progressBarContainer)
        {
            $(progressBarContainer).html('<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%"><span class="sr-only">0% Complete</span></div></div>');
         
            this.progressBar = $(progressBarContainer).find(".progress:first");
            this.setProgress = function(progress)
            {
                this.show();
                $(this.progressBar).find(".progress-bar:first").css("width",progress.toString()+"%");
            };
            this.hide = function()
            {
                $(this.progressBar).addClass("hide");
            };
            this.show = function()
            {
                $(this.progressBar).show();
                $(this.progressBar).removeClass("hide");
            };
            this.fadeOut = function()
            {
                $(this.progressBar).fadeOut(2000);
            };
            this.setFailure = function()
            {
                $(this.progressBar).find(".progress-bar:first").removeClass("progress-bar-success").addClass("progress-bar-danger");
                this.setProgress(100);
                $(this.progressBar).find("span:first").html("Process Failure. Error Occured!");
            };
            this.setSuccess = function()
            {
                $(this.progressBar).find(".progress-bar:first").removeClass("progress-bar-danger").addClass("progress-bar-success");
                this.setProgress(100);
            };
            
            
            
        };
        
        return new progressBar(this);
        
        
    };
}(jQuery));