#Bootstrap Progressbar JQuery Plugin
Jquery Plugin to create bootstrap progressbar and control progress, show failure and success of ajax calls

composer require shyam-achuthan/bootstrap-progressbar
or download and include href to bootstrap-progressbar.js in your html code after jquery init

##Usage

###Intiating
 var progressBar = $("#progress").bootstrapProgressBar();

 ##Control Progress
 progressBar.setProgress(0);
 progressBar.setProgress(50);
 progressBar.setProgress(80);

 ###Show Progressbar
progressBar.show();

 ###Hide Progressbar
 progressBar.hide();

 ###Set Success
 progressBar.setSuccess();
 // This will show the success with progressbar animated to green color and marks complete (100%) and hides



 ###Set Failure
 progressBar.setFailure();
 // This will show the failure with progressbar animated to red color and marks complete (100%) and hides


 ##Updates Expected
 Provision to show error/success messages on bootstrap modals / inline in next version