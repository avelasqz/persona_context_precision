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









  slides.trial = slide({
    name: "trial",

    present: exp.stimuli,
    present_handle : function(stim) {
      $('.scenario').hide();
      $('.question').hide();
      $('.answer').hide();
      $('.phone_shirt').hide();
      $('.prompt').hide();
      $('.person1_pic').hide();
      $('.person2_pic').hide();
      $('.space_msg_all').hide();

      exp.response = null

      exp.trial_number += 1

      // store stimulus data
      this.stim = stim;

      if (stim.type == "crit") {
        
        $(".type").html(stim.type);
        console.log("type:", stim.type);

        $(".item").html(stim.item);
        console.log("item:", stim.item);

        exp.current_char1 = exp.chars.shift();
        console.log("character 1:", exp.current_char1);

        exp.current_char2 = exp.chars.shift();
        console.log("character 2:", exp.current_char2);

        exp.scenario = stim.scenario.replace("person1", exp.current_char1);
        exp.scenario = exp.scenario.replace("person1", exp.current_char1);
        exp.scenario = exp.scenario.replace("person2", exp.current_char2);
        $(".scenario").html(exp.scenario);
        console.log("scenario:", exp.scenario);

        $(".question").html(stim.question);
        console.log("question:", stim.question);

        exp.time = exp.times.shift();
        exp.answer = stim.answer.replace("TIME", exp.time);

        $(".answer").html(exp.answer);
        console.log("answer:", exp.answer);

        exp.color = "none";

        exp.image_pair = exp.images.shift();
        exp.image1 = exp.image_pair.shift();
        console.log("image 1:", exp.image1);
        exp.image2 = exp.image_pair.shift();
        console.log("image 2:", exp.image2);

        exp.person1_pic = '<img src="images/'+exp.image1 + '.png'+'" style="height:250px">';
        $(".person1_pic").html(exp.person1_pic);

        exp.person2_pic = '<img src="images/'+exp.image2 + '.png'+'" style="height:250px">';
        $(".person2_pic").html(exp.person2_pic);


        $(".phone_shirt").html('<img src="images/phone.png" style="height:250px">');

        exp.prompt = stim.prompt.replace("person2", exp.current_char2);
        exp.prompt = exp.prompt.replace("TIME", exp.time);
        exp.prompt = exp.prompt.replace("TIME", exp.time);
        $(".prompt").html(exp.prompt);

      } else {

        $(".type").html(stim.type);
        console.log("type:", stim.type)

        $(".item").html(stim.item);
        console.log("item:", stim.item)

        exp.current_char1 = exp.chars.shift()
        console.log("character 1:", exp.current_char1)

        exp.current_char2 = exp.chars.shift()
        console.log("character 2:", exp.current_char2)

        exp.scenario = stim.scenario.replace("person1", exp.current_char1)
        exp.scenario = exp.scenario.replace("person1", exp.current_char1)
        exp.scenario = exp.scenario.replace("person2", exp.current_char2)
        $(".scenario").html(exp.scenario);
        console.log("scenario:", exp.scenario)

        $(".question").html(stim.question);
        console.log("question:", stim.question)

        exp.color = exp.colors.shift()
        exp.answer = stim.answer.replace("COLOR", exp.color)
        $(".answer").html(exp.answer);
        console.log("answer:", exp.answer)

        exp.time = "none";


        exp.image1 = exp.fill_images.shift();
        console.log("image 1:", exp.image1);
        exp.image2 = exp.fill_images.shift();
        console.log("image 2:", exp.image2);

        exp.person1_pic = '<img src="images/'+exp.image1 + '.png'+'" style="height:250px">';
        $(".person1_pic").html(exp.person1_pic);

        exp.person2_pic = '<img src="images/'+exp.image2 + '.png'+'" style="height:250px">';
        $(".person2_pic").html(exp.person2_pic);


        $(".phone_shirt").html('<img src="images/phone.png" style="height:250px">');


        exp.prompt = stim.prompt.replace("person2", exp.current_char2);
        exp.prompt = exp.prompt.replace("COLOR", exp.color);
        $(".prompt").html(exp.prompt);

      }

      $('.scenario').show();
      $('.question').show();
      $('.answer').show();
      $('.phone_shirt').show();
      $('.prompt').show();
      $('.person1_pic').show();
      $('.person2_pic').show();
      $('.space_msg_all').show();

    },

    button: function() {
      this.log_responses();
      _stream.apply(this);
    },

    log_responses: function () {
      exp.data_trials.push({
        "trial_number": exp.trial_number,
        "trial_type": this.stim.type,
        "item": this.stim.item,
        "name1": exp.current_char1,
        "name2": exp.current_char2,
        "image1": exp.image,
        "image2": exp.image,
        "time": exp.time,
        "color": exp.color,
        "descriptor 1": $('#desc1').val(),
        "descriptor 2": $('#desc2').val(),
        "descriptor 3": $('#desc3').val(),
        "descriptor 4": $('#desc4').val(),
        "label": $('#label_ans').val()
      })
    }

    });










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
  // var fill_stims = _.shuffle(all_fills);


  // var combinedStims = $.map(fill_stims, function(v,i) {
  //   return [v, crit_stims[i]]
  // });

  // exp.stimuli = combinedStims;
  exp.stimuli = crit_stims;




  exp.n_trials = exp.stimuli.length;



  // exp.persona = _.sample(["n", "o"]); //can randomize between subjects conditions here
  // console.log("persona:", exp.persona)


  // exp.condition = _.shuffle(["m","m","m","m","m","m","mm","mm","mm","mm","mm","mm","nm","nm","nm","nm","nm","nm","nnm","nnm","nnm","nnm","nnm","nnm"])
  // console.log("condition:", exp.condition)

  exp.chars = _.shuffle(["Alex", "Sam", "Dakota", "Taylor", "Ash", "Casey", "Devin", "Riley", "Jessie", "Jamie", "Quinn", "Jordan", "Morgan", "Skyler", "Shawn", "Kendall"])
  console.log("char_order:", exp.chars)

  // exp.images = _.shuffle(["nerd_guy1", "nerd_guy2", "nerd_girl1", "nerd_girl2", "skater_guy1", "skater_guy2", "skater_girl1", "skater_girl2", "hippie_guy1", "hippie_guy2", "hippie_girl1", "hippie_girl2"])
  // console.log("image_order:", exp.images)

  // use the above if mixing and matching character types - e.g. a nerd talking to a skater - is acceptable; otherwise, use the below

  exp.nerd_images = _.shuffle(["nerd_guy1", "nerd_guy2", "nerd_girl1", "nerd_girl2"])

  // exp.skater_images = _.shuffle(["skater_guy1", "skater_guy2", "skater_girl1", "skater_girl2"])

  exp.hippie_images = _.shuffle(["hippie_guy1", "hippie_guy2", "hippie_girl1", "hippie_girl2"])

  exp.unshuffled_images = [];
  exp.nerd_pair1 = [];
  exp.nerd_pair1.push(exp.nerd_images.shift());
  exp.nerd_pair1.push(exp.nerd_images.shift());
  exp.nerd_pair2 = [];
  exp.nerd_pair2.push(exp.nerd_images.shift());
  exp.nerd_pair2.push(exp.nerd_images.shift());
  exp.hippie_pair1 = [];
  exp.hippie_pair1.push(exp.hippie_images.shift());
  exp.hippie_pair1.push(exp.hippie_images.shift());
  exp.hippie_pair2 = [];
  exp.hippie_pair2.push(exp.hippie_images.shift());
  exp.hippie_pair2.push(exp.hippie_images.shift());
  exp.unshuffled_images.push(exp.nerd_pair1);
  exp.unshuffled_images.push(exp.nerd_pair2);
  exp.unshuffled_images.push(exp.hippie_pair1);
  exp.unshuffled_images.push(exp.hippie_pair2);
  exp.images = _.shuffle(exp.unshuffled_images)
  console.log("image_order:", exp.images)



  exp.fill_images = _.shuffle(["fill1", "fill2", "fill3", "fill4", "fill5", "fill6", "fill7", "fill8"])
  console.log("fill image order:", exp.fill_images);

  // the above with four critical trials, only two character types in play, each character seen only once, speaking to another character of the same type; and four filler trials, only one character type in play, each character seen only once


  exp.times = _.shuffle(["3:00", "1:30", "11:00", "9:30"])

  exp.colors = _.shuffle(["blue", "red", "green", "yellow"])


  $('.phone').html('<img src="images/phone.png" style="height:175px">');

  // function makeStims(cond, i) {
  //   stims[i].condition = cond;
  // }

  // var makeStims = function(cond,i) {
  //   stimuli[i].condition = cond;
  // }
  // console.log("condition", cond)
  
  exp.trial_number = 0

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
    "trial",
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
