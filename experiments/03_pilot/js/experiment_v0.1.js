// set up experiment logic for each slide
function make_slides(f) {
  var slides = {};


  // set up initial slide
  slides.i0 = slide({
    name: "i0",
    start: function() {
      exp.startT = Date.now();
    }
  });


  // set up instructions slide
  slides.instructions = slide({
    name: "instructions",
    start: function() {
      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
       if (e.keyCode==32){
        _s.button();
        }
      }
    },
    button: function() {
      exp.go();
    }
  });


  // slides.trial = slide({
  //   name: exp.all_trials.shift(),

  //   present: exp.stimuli,
  //   present_handle : function(stim) {
  //     $('.scenario').hide();
  //     $('.interlocutors').hide();
  //     $('.speech').hide();
  //     $('.phone').hide();
  //     $('.question').hide();
  //     $('.space_msg_all').hide();

  //     exp.response = null

  //     // store stimulus data
  //     this.stim = stim;





  //     if (stim.domain != "filler") {

  //       console.log("interlocutors:", exp.persona);

  //       // var cond = exp.condition.pop();
  //       exp.cond = exp.condition.pop();
  //       console.log("condition:", exp.cond);

  //       // var scenario = stim.scenario;
  //       // $(".scenario").html(scenario);

  //       // var question = stim.question;
  //       // $(".question").html(question);

  //       var scenario_id = "scenario_" + exp.persona;
  //       console.log("scenario_id:", scenario_id)

  //       var key = "scenario_" + exp.persona;
  //       // var scenario = stim[key];
  //       exp.scenario = stim[key];

  //       //or

  //       // var scenario = stim[`scenario_${exp.persona}`]


  //       $(".scenario").html(exp.scenario);
  //       console.log("scenario:", exp.scenario)

  //       // $ is jquery; this is used to connect js to html; first .scenario is the html <div>; the second, after html, is the variable you've just created
  //       // try a # rather than a . in the <div> part?
  //       // stim.'scenario_ + exp.persona+' or something like that maybe?
  //       // 


  //       // var question = stim.question;
  //       exp.question = stim[`question_${exp.persona}`];
  //       $(".question").html(exp.question);
  //       console.log("question:", exp.question)

  //       var interlocutors = '<img src="images/'+exp.persona + '.png'+'" style="height:400px">';
  //       $(".interlocutors").html(interlocutors);
  //       console.log("interlocutors:", interlocutors)

  //       var speech = '<img src="images/'+ stim.item + '_' + exp.persona + '.png'+'" style="height:400px">';
  //       $(".speech").html(speech);
  //       console.log("speech:", speech)

  //       var phone = '<img src="images/'+ stim.item + '_' + exp.cond + '.png'+'" style="height:250px">';
  //       $(".phone").html(phone);
  //     } else {

  //         exp.cond = stim.condition;
  //         console.log("condition:", exp.cond);

  //         exp.scenario = stim.scenario;
  //         console.log("scenario:", exp.scenario)
  //         $(".scenario").html(exp.scenario);

  //         // $ is jquery; this is used to connect js to html; first .scenario is the html <div>; the second, after html, is the variable you've just created
  //         // try a # rather than a . in the <div> part?
  //         // stim.'scenario_ + exp.persona+' or something like that maybe?
  //         // 


  //         exp.question = stim.question;
  //         $(".question").html(exp.question);
  //         console.log("question:", exp.question)

  //         var interlocutors = '<img src="images/bt.png" style="height:400px">';
  //         $(".interlocutors").html(interlocutors);
  //         console.log("interlocutors:", interlocutors)

  //         var speech = '<img src="images/'+ stim.item + '_bt.png'+'" style="height:400px">';
  //         $(".speech").html(speech);
  //         console.log("speech:", speech)

  //         var phone = '<img src="images/' + 'phone_' + stim.item + '.png'+'" style="height:250px">';
  //         $(".phone").html(phone);
  //     }



  slides.trial = slide({
    name: exp.all_trials.shift(),
    start: function(){
      $('.person1').html('Joe');
    }
  });


  slides.trial = slide({
    name: exp.all_trials.shift(),
    start: function(){
      $('.person1').html('Joe');
    }
  });

  slides.trial = slide({
    name: exp.all_trials.shift(),
    start: function(){
      $('.person1').html('Joe');
    }
  });

  slides.trial = slide({
    name: exp.all_trials.shift(),
    start: function(){
      $('.person1').html('Joe');
    }
  });

  slides.trial = slide({
    name: exp.all_trials.shift(),
    start: function(){
      $('.person1').html('Joe');
    }
  });

  slides.trial = slide({
    name: exp.all_trials.shift(),
    start: function(){
      $('.person1').html('Joe');
    }
  });

  slides.trial = slide({
    name: exp.all_trials.shift(),
    start: function(){
      $('.person1').html('Joe');
    }
  });

  slides.trial = slide({
    name: exp.all_trials.shift(),
    start: function(){
      $('.person1').html('Joe');
    }
  });



  //     var allow_key_press = 0;

  //     $('.scenario').show();
  //     console.log("scenario", exp.scenario);
  //     setTimeout(function() {
  //       $('.interlocutors').show()
  //       setTimeout(function() {
  //         $('.interlocutors').hide()
  //         $('.speech').show()
  //         setTimeout(function() {
  //           $('.question').show()
  //           $('.phone').show()
  //           allow_key_press = 1;
  //         }, 3000)
  //       }, 3000)
  //     }, 4000);

  //     document.onkeydown = checkKey;
  //     function checkKey(e) {
  //       e = e || window.event;
  //     if ((allow_key_press=="1") && (e.keyCode==70)){
  //       console.log("Press F")
  //       exp.response = "f"
  //       $('.space_msg_all').show()
  //       // _s.button();
  //     } else if ((allow_key_press=="1") && (e.keyCode==74)){
  //       console.log("Press J")
  //       exp.response = "j"
  //       $('.space_msg_all').show()
  //       // _s.button();
  //     } else if ($('.space_msg_all').is(':visible') && (e.keyCode==32))
  //         _s.button();
  //     }

  //   },

  //   // handle click on "Continue" button
  //   button: function() {
  //       this.log_responses();
  //       _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
  //   },

  //   // save response
  //   log_responses: function() {
  //     exp.data_trials.push({
  //       "item": this.stim.item,
  //       "slide_number_in_experiment": exp.phase, //exp.phase is a built-in trial number tracker
  //       // "scenario": this.stim.scenario,
  //       // "question":this.stim.question,
  //       // "img_phone": this.stim.img_phone,
  //       "persona": exp.persona,
  //       // "scenario": this.stim[`scenario_${exp.persona}`],
  //       // "question":this.stim[`question_${exp.persona}`],
  //       "scenario": exp.scenario,
  //       "question": exp.question,
  //       "condition": exp.cond,

  //       "response": exp.response
  //     });
  //   }
  // });












  // slide to collect subject information
  slides.subj_info = slide({
    name: "subj_info",
    submit: function(e) {
      exp.subj_data = {
        language: $("#language").val(),
        enjoyment: $("#enjoyment").val(),
        asses: $('input[name="assess"]:checked').val(),
        age: $("#age").val(),
        gender: $("#gender").val(),
        education: $("#education").val(),
        fairprice: $("#fairprice").val(),
        comments: $("#comments").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });






  // 
  slides.thanks = slide({
    name: "thanks",
    start: function() {
      exp.data = {
        "trials": exp.data_trials,
        "catch_trials": exp.catch_trials,
        "system": exp.system,
        "personae": exp.persona,
        "subject_information": exp.subj_data,
        "time_in_minutes": (Date.now() - exp.startT) / 60000
      };
      proliferate.submit(exp.data);
    }
  });

  return slides;
}







/// initialize experiment
function init() {
  exp.trials = [];
  exp.catch_trials = [];
  


  




  var crit_stims = _.shuffle(all_stims);
  var fill_stims = _.shuffle(all_fills);


  var combinedStims = $.map(fill_stims, function(v,i) {
    return [v, crit_stims[i]]
  });

  exp.stimuli = combinedStims;




  exp.n_trials = exp.stimuli.length;



  exp.persona = _.sample(["n", "o"]); //can randomize between subjects conditions here
  console.log("persona:", exp.persona)


  exp.condition = _.shuffle(["m","m","m","m","m","m","mm","mm","mm","mm","mm","mm","nm","nm","nm","nm","nm","nm","nnm","nnm","nnm","nnm","nnm","nnm"])
  console.log("condition:", exp.condition)

  exp.all_trials = _.shuffle(["crit_trial1", "crit_trial2", "crit_trial3", "crit_trial4", "fill_trial1", "fill_trial2", "fill_trial3", "fill_trial4"])
  console.log("trial_order:", exp.all_trials)

  exp.chars = _.shuffle(["Alex", "Sam", "Dakota", "Taylor", "Ash", "Casey", "Devin", "Riley", "Jessie", "Jamie", "Quinn", "Jordan", "Morgan", "Skyler", "Shawn", "Kendall"])
  console.log("char_order:", exp.chars)

  $('.c_1_1').html(exp.chars.shift())
  $('.c_1_2').html(exp.chars.shift())
  $('.c_2_1').html(exp.chars.shift())
  $('.c_2_2').html(exp.chars.shift())
  $('.c_3_1').html(exp.chars.shift())
  $('.c_3_2').html(exp.chars.shift())
  $('.c_4_1').html(exp.chars.shift())
  $('.c_4_2').html(exp.chars.shift())
  $('.f_1_1').html(exp.chars.shift())
  $('.f_1_2').html(exp.chars.shift())
  $('.f_2_1').html(exp.chars.shift())
  $('.f_2_2').html(exp.chars.shift())
  $('.f_3_1').html(exp.chars.shift())
  $('.f_3_2').html(exp.chars.shift())
  $('.f_4_1').html(exp.chars.shift())
  $('.f_4_2').html(exp.chars.shift())

  exp.images = _.shuffle(["nerd1", "nerd2", "nerd3", "nerd4", "other1", "other2", "other3", "other4"])
  console.log("image_order:", exp.images)



  var c_1_1_pic = '<img src="images/'+exp.images.shift() + '.png'+'" style="height:250px">';
  $(".c_1_1_pic").html(c_1_1_pic);
  var c_1_2_pic = '<img src="images/'+exp.images.shift() + '.png'+'" style="height:250px">';
  $(".c_1_2_pic").html(c_1_2_pic);

  var c_2_1_pic = '<img src="images/'+exp.images.shift() + '.png'+'" style="height:250px">';
  $(".c_2_1_pic").html(c_2_1_pic);
  var c_2_2_pic = '<img src="images/'+exp.images.shift() + '.png'+'" style="height:250px">';
  $(".c_2_2_pic").html(c_2_2_pic);

  var c_3_1_pic = '<img src="images/'+exp.images.shift() + '.png'+'" style="height:250px">';
  $(".c_3_1_pic").html(c_3_1_pic);
  var c_3_2_pic = '<img src="images/'+exp.images.shift() + '.png'+'" style="height:250px">';
  $(".c_3_2_pic").html(c_3_2_pic);

  var c_4_1_pic = '<img src="images/'+exp.images.shift() + '.png'+'" style="height:250px">';
  $(".c_4_1_pic").html(c_4_1_pic);
  var c_4_2_pic = '<img src="images/'+exp.images.shift() + '.png'+'" style="height:250px">';
  $(".c_4_2_pic").html(c_4_2_pic);



  //times



  $('.phone').html('<img src="images/phone.png" style="height:175px">');

  // function makeStims(cond, i) {
  //   stims[i].condition = cond;
  // }

  // var makeStims = function(cond,i) {
  //   stimuli[i].condition = cond;
  // }
  // console.log("condition", cond)
  
  exp.system = {
    Browser: BrowserDetect.browser,
    OS: BrowserDetect.OS,
    screenH: screen.height,
    screenUH: exp.height,
    screenW: screen.width,
    screenUW: exp.width
  };

  //blocks of the experiment:
  exp.structure = [
    "i0",
    "instructions",
    exp.all_trials.shift(),
    exp.all_trials.shift(),
    exp.all_trials.shift(),
    exp.all_trials.shift(),
    exp.all_trials.shift(),
    exp.all_trials.shift(),
    exp.all_trials.shift(),
    exp.all_trials.shift(),
    "subj_info",
    "thanks"
  ];

  exp.data_trials = [];

  //make corresponding slides:
  exp.slides = make_slides(exp);

  // exp.nQs = utils.get_exp_length();
  //this does not work if there are stacks of stims (but does work for an experiment with this structure)
  //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  $("#start_button").click(function() {
    exp.go();
  });

  exp.go(); //show first slide
}
