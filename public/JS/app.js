$(document).ready(function(){
    $('#home-choice').addClass('selected');
    $('#profile-content').hide();
    $('#brain-feed').hide();
    $('#social-search').hide();
    $('#assess-knowledge').hide();

    menuChoiceHndler();
    branchCreationModelhandler();
    profileToggleHandler();
    retrieveInfo();
    brainTableFunctionality();
    searchBtnHandler();
    retrieveProfileInformation();

    $('#btn-save-info').on('click', function() {
        saveProfileInformation();
    });

    assessmentHandler();
});

function saveProfileInformation() {
    var user = $.cookie("user");
    var ref = firebase.database().ref('users/' + user);

    var name = $('#full-name').val();
    var hometown = $('#hometown').val();
    var email = $('#email').val();
    var age = $('#age').val();
    var university = $('#university').val();
    var highest_education = $('#highest-education').val();
    var job_title = $('#job-title').val();

    ref.update({
        name: name,
        hometown: hometown,
        email: email,
        age: age,
        university: university,
        highest_education: highest_education,
        job_title: job_title
    });

    var count = 0;
    var count1 = 0;
    $('#user-info >div').each(function() {
        count += 1;
        if (count > 1) {
            $(this).remove();
        }
    });
    $('#profile-info >div').each(function() {
        count1 += 1;
        if (count1 > 2) {
            $(this).remove();
        }
    });
}

function retrieveProfileInformation(){
    var user = $.cookie('user');
    if(user){
        var ref = firebase.database().ref('users/' + user);
        ref.on('value', function(snapshot) {
            var data = snapshot.val();
            $("#user-email").text(data.email);

            var template = $('#profile-information').html();
            var html = Mustache.render(template, data);
            var output = $('#profile-info');
            output.append(html);


            var template = $('#user-information').html();
            var html = Mustache.render(template, data);
            var output = $('#user-info');
            output.append(html);
        });
    }
    else{
        alert('Error in retrieving user info!');
    }
}


function searchBtnHandler(){
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
}

function brainTableFunctionality(){
    $('.btn-filter').on('click', function () {
        var $target = $(this).data('target');
        if ($target != 'all') {
            $('.table tr').css('display', 'none');
            $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
        } else {
            $('.table tr').css('display', 'none').fadeIn('slow');
        }
    });

    $('#brain-feed .media').on('click', function(e){
        $('#brain-feed #catalog').addClass('hidden');
        $('#brain-feed #catalog-body').removeClass('hidden');
    });

    $('#go-back').on('click', function(){
        $('#brain-feed #catalog').removeClass('hidden');
        $('#brain-feed #catalog-body').addClass('hidden');
    });
}

function retrieveInfo(){
    var user = $.cookie("user");
    if(!user){
        window.location.href = "/WebApp/public/404.html";
    }
}

function profileToggleHandler(){
    $('#profile-info-toggle').change(function() {
        if($(this).prop('checked')=== true){
        }
    });
}

function menuChoiceHndler(){
    $('#home-choice').on('click',function(){
        if(!$('#home-choice').hasClass('selected')){
            $('#home-choice').addClass('selected');
            $('#cards').show();
        }
        if($('#brainfeed-choice').hasClass('selected')){
           $('#brainfeed-choice').removeClass('selected');
           $('#brain-feed').hide();
        }
        if($('#profile-choice').hasClass('selected')){
           $('#profile-choice').removeClass('selected');
            $('#profile-content').hide();
        }
        if($('#social-choice').hasClass('selected')){
           $('#social-choice').removeClass('selected');
            $('#social-search').hide();
        }
        if($('#assess-choice').hasClass('selected')){
           $('#assess-choice').removeClass('selected');
            $('#assess-knowledge').hide();
        }
    });

    $('#brainfeed-choice').on('click',function(){
        if(!$('#brainfeed-choice').hasClass('selected')){
            $('#brainfeed-choice').addClass('selected');
            $('#brain-feed').show();
        }
        if($('#home-choice').hasClass('selected')){
            $('#home-choice').removeClass('selected');
            $('#cards').hide();
        }
        if($('#profile-choice').hasClass('selected')){
            $('#profile-choice').removeClass('selected');
            $('#profile-content').hide();
        }
        if($('#social-choice').hasClass('selected')){
            $('#social-choice').removeClass('selected');
            $('#social-search').hide();
        }
        if($('#assess-choice').hasClass('selected')){
           $('#assess-choice').removeClass('selected');
            $('#assess-knowledge').hide();
        }
    });

    $('#profile-choice').on('click',function(){
        if(!$('#profile-choice').hasClass('selected')){
            $('#profile-choice').addClass('selected');
            $('#profile-content').show();
        }
        if($('#brainfeed-choice').hasClass('selected')){
            $('#brainfeed-choice').removeClass('selected');
            $('#brain-feed').hide();
        }
        if($('#home-choice').hasClass('selected')){
            $('#home-choice').removeClass('selected');
            $('#cards').hide();
        }
        if($('#social-choice').hasClass('selected')){
            $('#social-choice').removeClass('selected');
            $('#social-search').hide();
        }
        if($('#assess-choice').hasClass('selected')){
           $('#assess-choice').removeClass('selected');
            $('#assess-knowledge').hide();
        }
    });

    $('#social-choice').on('click',function(){
        if($('#assess-choice').hasClass('selected')){
           $('#assess-choice').removeClass('selected');
            $('#assess-knowledge').hide();
        }
        if(!$('#social-choice').hasClass('selected')){
            $('#social-choice').addClass('selected');
            $('#social-search').show();
        }
        if($('#brainfeed-choice').hasClass('selected')){
            $('#brainfeed-choice').removeClass('selected');
            $('#brain-feed').hide();
        }
        if($('#home-choice').hasClass('selected')){
            $('#home-choice').removeClass('selected');
            $('#cards').hide();
        }
        if($('#profile-choice').hasClass('selected')){
            $('#profile-choice').removeClass('selected');
            $('#profile-content').hide();
        }
    });

    $('#assess-choice').on('click',function(){
        if(!$('#assess-choice').hasClass('selected')){
            $('#assess-choice').addClass('selected');
            $('#assess-knowledge').show();
        }
        if($('#social-choice').hasClass('selected')){
            $('#social-choice').removeClass('selected');
            $('#social-search').hide();
        }
        if($('#brainfeed-choice').hasClass('selected')){
            $('#brainfeed-choice').removeClass('selected');
            $('#brain-feed').hide();
        }
        if($('#home-choice').hasClass('selected')){
            $('#home-choice').removeClass('selected');
            $('#cards').hide();
        }
        if($('#profile-choice').hasClass('selected')){
            $('#profile-choice').removeClass('selected');
            $('#profile-content').hide();
        }
    });
}

function branchCreationModelhandler(){
    $('#pre-screening-questions').carousel({
        wrap:false,
        ride:false,
        interval: false
    });

    $('#preScreen').on('click', function() {
        $('#modal-branches .modal-title').text('Pre Screening');
        $('#saveImage').parent().addClass('hidden');
        $('#preScreen').attr('disabled', true);
        $('#branch-info').hide();
        $('#brainstorm-format').hide();
        $('#pre-screening').show();
    });

    $('#saveImage').on('click', function(){
        $('#modal-branches .modal-title').text('Set Up Brainstorm Branch');
        $('#preScreen').parent().removeClass('hidden');
        $('#branch-info').hide();
        $('#brainstorm-format').show();
        $('#pre-screening').hide();
        $(this).parent().addClass('hidden');
    });

    $('#finishPreScreen').on('click', function(){
        // TODO : Check answers
        $('#modal-branches .modal-title').text('Pre Screening Result');
        $('#branch-info').hide();
        $('#brainstorm-format').hide();
        $('#pre-screening').hide();
        $('#pre-screening-result').show();
        var answers = $("#pre-screening-questions .item input[type=radio]:checked").length;

        var content = "";
        if(answers > 1){
            content = "Congratulations! "
        }else{
            content = "Oops!";
        }
        content += '<br/> Closing ..';
        $('#pre-screening-result p').html(content);
        setTimeout("$('#modal-branches').modal('hide');",3000);
        $(this).attr('disabled', true);
    });

    $('#pre-screening-questions').on('slid.bs.carousel', function(){ 
        if ($('.carousel-inner .item:last').hasClass('active')){
            $(this).find(".carousel-control-next").hide();
            //$('#preScreen').attr('disabled', false);
            $('#preScreen').parent().addClass('hidden');
            $('#finishPreScreen').parent().removeClass('hidden');
        }
    });

    $('#modal-branches').on('show.bs.modal', function (e) {
        // Reset Model
        answers = 0;
        $('#branch-info').show();
        $('#brainstorm-format').hide();
        $('#pre-screening').hide();
        $('#pre-screening-result').hide();
        $('#pre-screening-questions').carousel(0);
        $('#saveImage').parent().removeClass('hidden');
        $('#preScreen').parent().addClass('hidden');
        $('#preScreen').attr('disabled', false);
        $('#finishPreScreen').attr('disabled', false);
        $('#finishPreScreen').parent().addClass('hidden');
        $('#pre-screening-result p').empty();
        $(this).find(".carousel-control-next").show();
        $('#modal-branches .modal-title').text('Welcome to the Branch Creator!');
        $('input[type=radio]').prop('checked', false);

    });

    $('#input-range').change(function(){
        $('output#rangeWarning-input').text(this.value);
    });
}

function assessmentHandler(){
    $('#add-mcq-option').on('click', function(){
        var html = '<input class="mdl-textfield__input" type="text" >';
        $('#mcq-options').append(html);
    })
}