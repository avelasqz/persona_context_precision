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
    button: function() {
      exp.go();
    }
  });









  slides.trial = slide({
    name: "trial",

    present: exp.stimuli,
    present_handle : function(stim) {
      exp.startTrial = Date.now();
      $('.scenario').hide();
      $('.question').hide();
      $('.answer').hide();
      $('.prompt1').hide();
      $('#minimum').hide();
      $('#maximum').hide();
      $('.prompt2').hide();
      $('.person1_pic').hide();
      $('.person2_pic').hide();
      $('.button').hide();
      $('.tickmarks').hide();
      $('#min').hide();
      $('#max').hide();
      $('#minimum').val("");
      $('#maximum').val("");

      exp.response = null

      exp.trial_number += 1

      // store stimulus data
      this.stim = stim;

      if (stim.type == "crit") {
        
        $(".type").html(stim.type);
        console.log("type:", stim.type);

        exp.item = stim.item;
        $(".item").html(exp.item);
        console.log("item:", exp.item);

        exp.current_char1 = exp.chars.shift();
        console.log("character 1:", exp.current_char1);

        exp.current_char2 = exp.chars.shift();
        console.log("character 2:", exp.current_char2);

        exp.scenario = stim.scenario.replace("person1", exp.current_char1);
        exp.scenario = exp.scenario.replace("person1", exp.current_char1);
        exp.scenario = exp.scenario.replace("person2", exp.current_char2);
        $(".scenario").html(exp.scenario);
        console.log("scenario:", exp.scenario);

        exp.question_bubble = '<img src="images/'+ exp.item + '.png'+'" style="height:150px">';

        $(".question").html(exp.question_bubble);
        console.log("question:", exp.question_bubble);

        exp.time_matrix = exp.times.shift();
        exp.time_step_1 = exp.time_matrix.shift();
        exp.time_step_2 = exp.time_matrix.shift();
        exp.time_step_3 = exp.time_matrix.shift();
        exp.time_step_4 = exp.time_matrix.shift();
        exp.time = exp.time_matrix.shift();
        exp.time_step_6 = exp.time_matrix.shift();
        exp.time_step_7 = exp.time_matrix.shift();
        exp.time_step_8 = exp.time_matrix.shift();
        exp.time_step_9 = exp.time_matrix.shift();
        

        exp.bubble_time = exp.time.replace(":", ".")

        exp.answer_bubble = '<img src="images/'+ exp.bubble_time + '.png'+'" style="height:150px">';

        $(".answer").html(exp.answer_bubble);
        console.log("answer:", exp.answer_bubble);

        exp.minute = "none";

        exp.image_pair = exp.images.shift();
        exp.image1 = exp.image_pair.shift();
        console.log("image 1:", exp.image1);
        exp.image2 = exp.image_pair.shift();
        console.log("image 2:", exp.image2);

        exp.person1_pic = '<img src="images/'+exp.image1 + '.png'+'" style="height:250px">';
        $(".person1_pic").html(exp.person1_pic);

        exp.person2_pic = '<img src="images/'+exp.image2 + '.png'+'" style="height:250px">';
        $(".person2_pic").html(exp.person2_pic);



        exp.prompt1 = stim.prompt1.replace("person2", exp.current_char2);
        exp.prompt1 = exp.prompt1.replace("TIME", exp.time);
        exp.prompt1 = exp.prompt1.replace("TIME", exp.time);
        $(".prompt1").html(exp.prompt1);

        exp.prompt2 = stim.prompt2.replace("person2", exp.current_char2);
        exp.prompt2 = exp.prompt2.replace("TIME", exp.time);
        exp.prompt2 = exp.prompt2.replace("TIME", exp.time);
        $(".prompt2").html(exp.prompt2);

        $(".step_1").html(exp.time_step_1);
        $(".step_2").html(exp.time_step_2);
        $(".step_3").html(exp.time_step_3);
        $(".step_4").html(exp.time_step_4);
        $(".step_5").html(exp.time);
        $(".step_6").html(exp.time_step_6);
        $(".step_7").html(exp.time_step_7);
        $(".step_8").html(exp.time_step_8);
        $(".step_9").html(exp.time_step_9);

        // var value = $('#earliest').val();
        // $("#early").html(value)

        // var value = $('#latest').val();
        // $("#late").html(value)

        var rangeslider_min = document.getElementById("minimum");
        exp.output_min = document.getElementById("min");
        exp.output_min.innerHTML = rangeslider_min.value;
  
        rangeslider_min.oninput = function() {
          exp.output_min.innerHTML = this.value;
        }

        var rangeslider_max = document.getElementById("maximum");
        exp.output_max = document.getElementById("max");
        exp.output_max.innerHTML = rangeslider_max.value;
  
        rangeslider_max.oninput = function() {
          exp.output_max.innerHTML = this.value;
        }


        // rangeslider_early.value = 0;
        // rangeslider_late.value = 0


      } else {

        $(".type").html(stim.type);
        console.log("type:", stim.type)

        exp.item = stim.item;
        $(".item").html(exp.item);
        console.log("item:", stim.item)

        exp.current_char1 = exp.chars.shift()
        console.log("character 1:", exp.current_char1)

        exp.current_char2 = exp.chars.shift()
        console.log("character 2:", exp.current_char2)

        exp.scenario = stim.scenario.replace("person1", exp.current_char1)
        exp.scenario = exp.scenario.replace("person1", exp.current_char1)
        exp.scenario = exp.scenario.replace("person2", exp.current_char2)
        exp.scenario = exp.scenario.replace("person2", exp.current_char2)
        $(".scenario").html(exp.scenario);
        console.log("scenario:", exp.scenario)




        exp.question_bubble = '<img src="images/'+ exp.item + '.png'+'" style="height:150px">';

        $(".question").html(exp.question_bubble);
        console.log("question:", exp.question_bubble);

        exp.minutes_matrix = exp.minutes.shift();
        exp.minute_step_1 = exp.minutes_matrix.shift();
        exp.minute_step_2 = exp.minutes_matrix.shift();
        exp.minute_step_3 = exp.minutes_matrix.shift();
        exp.minute_step_4 = exp.minutes_matrix.shift();
        exp.minute = exp.minutes_matrix.shift();
        exp.minute_step_6 = exp.minutes_matrix.shift();
        exp.minute_step_7 = exp.minutes_matrix.shift();
        exp.minute_step_8 = exp.minutes_matrix.shift();
        exp.minute_step_9 = exp.minutes_matrix.shift();

        exp.answer_bubble = '<img src="images/'+ exp.minute + '.png'+'" style="height:150px">';

        $(".answer").html(exp.answer_bubble);
        console.log("answer:", exp.answer_bubble);




        exp.time = "none";


        exp.image1 = exp.fill_images.shift();
        console.log("image 1:", exp.image1);
        exp.image2 = exp.fill_images.shift();
        console.log("image 2:", exp.image2);

        exp.person1_pic = '<img src="images/'+exp.image1 + '.png'+'" style="height:250px">';
        $(".person1_pic").html(exp.person1_pic);

        exp.person2_pic = '<img src="images/'+exp.image2 + '.png'+'" style="height:250px">';
        $(".person2_pic").html(exp.person2_pic);


        exp.prompt1 = stim.prompt1.replace("person2", exp.current_char2);
        exp.prompt1 = exp.prompt1.replace("MINUTE", exp.minute);
        $(".prompt1").html(exp.prompt1);

        exp.prompt2 = stim.prompt2.replace("person2", exp.current_char2);
        exp.prompt2 = exp.prompt2.replace("MINUTE", exp.minute);
        $(".prompt2").html(exp.prompt2);

        $(".step_1").html(exp.minute_step_1);
        $(".step_2").html(exp.minute_step_2);
        $(".step_3").html(exp.minute_step_3);
        $(".step_4").html(exp.minute_step_4);
        $(".step_5").html(exp.minute);
        $(".step_6").html(exp.minute_step_6);
        $(".step_7").html(exp.minute_step_7);
        $(".step_8").html(exp.minute_step_8);
        $(".step_9").html(exp.minute_step_9);

        // $("#early").html($("#early").val());
        // $("#late").html("50")


        var rangeslider_min = document.getElementById("minimum");
        exp.output_min = document.getElementById("min");
        exp.output_min.innerHTML = rangeslider_min.value;
  
        rangeslider_min.oninput = function() {
          exp.output_min.innerHTML = this.value;
        }

        var rangeslider_max = document.getElementById("maximum");
        exp.output_max = document.getElementById("max");
        exp.output_max.innerHTML = rangeslider_max.value;
  
        rangeslider_max.oninput = function() {
          exp.output_max.innerHTML = this.value;
        }



      }

      $('.scenario').show();
      $('.question').show();
      $('.answer').show();
      $('.person1_pic').show();
      $('.person2_pic').show();
      setTimeout(function() {
        $('.prompt1').show();
        $('.tickmarks').show();
        $('#minimum').show();
        $('.prompt2').show();
        $('#maximum').show();
        $('.button').show();
      }, 3000)
      

    },

    button: function() {
      exp.endTrial = Date.now();
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
        "image1": exp.image1,
        "image2": exp.image2,
        "time": exp.time,
        "minute": exp.minute,
        "minimum": exp.output_min.innerHTML,
        "maximum": exp.output_max.innerHTML,

        "trial_time_minutes": (exp.endTrial - exp.startTrial) / 60000
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



  exp.fill_images = _.shuffle(["filler_girl1", "filler_girl2", "filler_girl3", "filler_girl4", "filler_guy1", "filler_guy2", "filler_guy3", "filler_guy4"])
  console.log("fill image order:", exp.fill_images);

  // the above with four critical trials, only two character types in play, each character seen only once, speaking to another character of the same type; and four filler trials, only one character type in play, each character seen only once


  exp.times = _.shuffle([["2:40", "2:45", "2:50", "2:55", "3:00", "3:05", "3:10", "3:15", "3:20"], ["1:10", "1:15", "1:20", "1:25", "1:30", "1:35", "1:40", "1:45", "1:50"], ["7:40", "7:45", "7:50", "7:55", "8:00", "8:05", "8:10", "8:15", "8:20"], ["9:10", "9:15", "9:20", "9:25", "9:30", "9:35", "9:40", "9:45", "9:50"]])
  console.log("times order:", exp.times);


  exp.minutes = _.shuffle([["1", "2", "3", "4", "5", "6", "7", "8", "9"], ["6", "7", "8", "9", "10", "11", "12", "13", "14"], ["11", "12", "13", "14", "15", "16", "17", "18", "19"], ["16", "17", "18", "19", "20", "21", "22", "23", "24"]])
  console.log("minutes order:", exp.minutes);


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
