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








  slides.intro = slide({
    name: "intro",

    present: exp.intro,
    present_handle : function(stim) {
      exp.startTrial = Date.now();
      $('.introtospeakers').hide();
      $('.scenario').hide();
      $('.question').hide();
      $('.answer').hide();
      $('.introtophones').hide();
      $('.prompt').hide();
      $('.phone').hide();
      $('.phone_back').hide();
      $('.person1_pic').hide();
      $('.person2_pic').hide();
      $('.intromessage').hide();
      $('.introbutton').hide();
      $('.button').hide();

      // store stimulus data
      this.stim = stim;


      exp.char_type = 'intro';
      console.log("character type:", exp.char_type)


      
      $('.white_box').html('<img src="images/white_box.png" style="width:260px">');

      $('.white_box').show();

      $(".type").html(stim.type);
      console.log("type:", stim.type);

      exp.item = stim.item;
      $(".item").html(exp.item);
      console.log("item:", exp.item);

      exp.stakes = "NA"

      exp.current_char1 = exp.intro_char1;
      console.log("character 1:", exp.current_char1);

      exp.current_char2 = exp.intro_char2;
      console.log("character 2:", exp.current_char2);

      exp.scenario = stim.scenario.replace("person1", exp.current_char1);
      exp.scenario = exp.scenario.replace("person1", exp.current_char1);
      exp.scenario = exp.scenario.replace("person2", exp.current_char2);
      $(".scenario").html(exp.scenario);
      console.log("scenario:", exp.scenario);

      exp.question_bubble = '<img src="images/intro_training_question.png" style="height:150px">';

      $(".question").html(exp.question_bubble);
      console.log("question:", exp.question_bubble);
      

      exp.condition = "NA"
      console.log("condition:", exp.condition);

      exp.tri_condition = "NA"
      console.log("three-way condition:", exp.tri_condition);


      exp.answer_bubble = '<img src="images/some_do_intro.png" style="height:150px">';

      $(".answer").html(exp.answer_bubble);
      console.log("answer:", exp.answer_bubble);

      exp.time = "none";
      exp.phone_time = "none";


      exp.image1 = exp.intro_image1;
      console.log("image 1:", exp.image1);
      exp.image2 = exp.intro_image2;
      console.log("image 2:", exp.image2);

      if (exp.image1.includes("guy")) {
        exp.questioner_gender = "male"
      } else {
        exp.questioner_gender = "female"
      };
      console.log("questioner gender:", exp.questioner_gender)

      if (exp.image2.includes("guy")) {
        exp.answerer_gender = "male"
      } else {
        exp.answerer_gender = "female"
      };
      console.log("answerer gender:", exp.answerer_gender)

      exp.person1_pic = '<img src="images/'+exp.image1 + '.png'+'" style="height:250px">';
      $(".person1_pic").html(exp.person1_pic);

      exp.person2_pic = '<img src="images/'+exp.image2 + '.png'+'" style="height:250px">';
      $(".person2_pic").html(exp.person2_pic);



      exp.prompt = stim.prompt.replace("person2", exp.current_char2);
      $(".prompt").html(exp.prompt);

      exp.phone_img = '<img src="images/intro_phone.png" style="height:250px">';
      $('.phone').html(exp.phone_img)

      exp.phone_back_img = '<img src="images/phone_back.png" style="height:250px">';
      $('.phone_back').html(exp.phone_back_img)


      var allow_key_press = 0;

      $('.introtospeakers').show();
      $('.scenario').show();
      $('.question').show();
      $('.answer').show();
      $('.person1_pic').show();
      $('.person2_pic').show();
      setTimeout(function() {
        $('.white_box').hide();
        $('.introtophones').show();
        $('.prompt').show();
        $('.phone').show();
        $('.phone_back').show();
        setTimeout(function() {
          $('.introbutton').show();
        }, 3000)
      }, 3000)

    },

    button: function() {
      exp.endTrial = Date.now();
      // this.log_responses();
      _stream.apply(this);
    },

    introbutton: function() {
      $('.intromessage').show();
      setTimeout(function() {
        $('.button').show();
      }, 7000)
    }

    // log_responses: function () {
    //   exp.data_trials.push({
    //     "training_trial_number": exp.training_trial_number,
    //     "trial_number": exp.trial_number,
    //     "crit_trial_number": exp.crit_trial_number,
    //     "fill_trial_number": exp.fill_trial_number,
    //     "trial_type": this.stim.type,
    //     "item": this.stim.item,
    //     "stakes": exp.stakes,
    //     "name1": exp.current_char1,
    //     "name2": exp.current_char2,
    //     "character_type": exp.char_type,
    //     "image1": exp.image1,
    //     "image2": exp.image2,
    //     "questioner gender": exp.questioner_gender,
    //     "answerer gender": exp.answerer_gender,
    //     "time": exp.time,
    //     "phone time": exp.phone_time,
    //     "match condition": exp.condition,
    //     "three-way condition": exp.tri_condition,
    //     "response": exp.response,
    //     "trial_time_minutes": (exp.endTrial - exp.startTrial) / 60000
    //   })
    // }

  });



  // set up interim instructions slide
  slides.interim1 = slide({
    name: "interim1",
    button: function() {
      exp.go();
    }
  });






  slides.training = slide({
    name: "training",

    present: exp.training,
    present_handle : function(stim) {
      exp.startTrial = Date.now();
      $('.scenario').hide();
      $('.question').hide();
      $('.answer').hide();
      $('.prompt').hide();
      $('.phone').hide();
      $('.phone_back').hide();
      $('.person1_pic').hide();
      $('.person2_pic').hide();
      $('.message_right').hide();
      $('.message_left').hide();
      $('.phone_right_red').hide();
      $('.phone_left_red').hide();
      $('.button').hide();

      // store stimulus data
      this.stim = stim;


      exp.char_type = 'training';
      console.log("character type:", exp.char_type)


      exp.training_trial_number += 1
      
      $('.white_box').html('<img src="images/white_box.png" style="width:260px">');

      $('.white_box').show();

      $(".type").html(stim.type);
      console.log("type:", stim.type);

      exp.item = stim.item;
      $(".item").html(exp.item);
      console.log("item:", exp.item);

      exp.stakes = "NA"

      exp.current_char1 = exp.training_char1;
      console.log("character 1:", exp.current_char1);

      exp.current_char2 = exp.training_char2;
      console.log("character 2:", exp.current_char2);

      exp.scenario = stim.scenario.replace("person1", exp.current_char1);
      exp.scenario = exp.scenario.replace("person1", exp.current_char1);
      exp.scenario = exp.scenario.replace("person2", exp.current_char2);
      $(".scenario").html(exp.scenario);
      console.log("scenario:", exp.scenario);

      exp.question_bubble = '<img src="images/intro_training_question.png" style="height:150px">';

      $(".question").html(exp.question_bubble);
      console.log("question:", exp.question_bubble);
      

      exp.condition = "NA"
      console.log("condition:", exp.condition);

      exp.tri_condition = "NA"
      console.log("three-way condition:", exp.tri_condition);


      exp.answer_bubble = '<img src="images/'+ exp.item + '.png'+'" style="height:150px">';

      $(".answer").html(exp.answer_bubble);
      console.log("answer:", exp.answer_bubble);

      exp.time = "none";
      exp.phone_time = "none";


      exp.image1 = exp.training_image1;
      console.log("image 1:", exp.image1);
      exp.image2 = exp.training_image2;
      console.log("image 2:", exp.image2);

      if (exp.image1.includes("guy")) {
        exp.questioner_gender = "male"
      } else {
        exp.questioner_gender = "female"
      };
      console.log("questioner gender:", exp.questioner_gender)

      if (exp.image2.includes("guy")) {
        exp.answerer_gender = "male"
      } else {
        exp.answerer_gender = "female"
      };
      console.log("answerer gender:", exp.answerer_gender)

      exp.person1_pic = '<img src="images/'+exp.image1 + '.png'+'" style="height:250px">';
      $(".person1_pic").html(exp.person1_pic);

      exp.person2_pic = '<img src="images/'+exp.image2 + '.png'+'" style="height:250px">';
      $(".person2_pic").html(exp.person2_pic);



      exp.prompt = stim.prompt.replace("person2", exp.current_char2);
      $(".prompt").html(exp.prompt);

      exp.phone_img = '<img src="images/'+exp.item + '_phone.png'+'" style="height:250px">';
      $('.phone').html(exp.phone_img)

      exp.phone_back_img = '<img src="images/phone_back.png" style="height:250px">';
      $('.phone_back').html(exp.phone_back_img)


      var phone_left_red = '<img src="images/'+stim.item+'_phone_red.png'+'" style="height:250px">';
      $(".phone_left_red").html(phone_left_red);
      var phone_right_red = '<img src="images/phone_back_red.png" style="height:250px">';
      $(".phone_right_red").html(phone_right_red);

      var message_left = stim.message_left;
      $(".message_left").html(message_left);
      var message_right = stim.message_right;
      $(".message_right").html(message_right);


      var allow_key_press = 0;

      $('.scenario').show();
      $('.question').show();
      $('.answer').show();
      $('.person1_pic').show();
      $('.person2_pic').show();
      setTimeout(function() {
        $('.white_box').hide();
        $('.prompt').show();
        $('.phone').show();
        $('.phone_back').show();
        allow_key_press = 1;
      }, 3000)
      

      $(document).ready(function() {
        $('.phone').click(function() {
          if (allow_key_press=="1") {
            console.log("visible phone selected")
            exp.response = "visible"
            $('.message_right').hide();
            $('.message_left').show();
            $('#phone_training').hide();
            $('#phone_back_training').show();
            $('.phone_right_red').hide();
            $('.phone_left_red').show();
            $('.button').show();
          }
        })
      })

      $(document).ready(function() {
        $('#phone_back_training').click(function() {
          if (allow_key_press=="1") {
            console.log("covered phone selected")
            exp.response = "covered"
            $('.message_left').hide();
            $('.message_right').show();
            $('#phone_training').show();
            $('#phone_back_training').hide();
            $('.phone_left_red').hide();
            $('.phone_right_red').show();
            $('.button').show();
          }
        })
      })

    },

    button: function() {
      exp.endTrial = Date.now();
      this.log_responses();
      _stream.apply(this);
    },

    log_responses: function () {
      exp.data_trials.push({
        "training_trial_number": exp.training_trial_number,
        "trial_number": exp.trial_number,
        "crit_trial_number": exp.crit_trial_number,
        "fill_trial_number": exp.fill_trial_number,
        "trial_type": this.stim.type,
        "item": this.stim.item,
        "stakes": exp.stakes,
        "name1": exp.current_char1,
        "name2": exp.current_char2,
        "character_type": exp.char_type,
        "image1": exp.image1,
        "image2": exp.image2,
        "questioner gender": exp.questioner_gender,
        "answerer gender": exp.answerer_gender,
        "time": exp.time,
        "phone time": exp.phone_time,
        "match condition": exp.condition,
        "three-way condition": exp.tri_condition,
        "response": exp.response,
        "trial_time_minutes": (exp.endTrial - exp.startTrial) / 60000
      })
    }

  });






  // set up interim instructions slide
  slides.interim2 = slide({
    name: "interim2",
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
      $('.prompt').hide();
      $('.phone').hide();
      $('.phone_back').hide();
      $('.person1_pic').hide();
      $('.person2_pic').hide();
      $('.button').hide();

      exp.response = null

      exp.trial_number += 1

      // store stimulus data
      this.stim = stim;

      if (stim.type == "crit") {

        exp.char_type = exp.cf;
        console.log("character type:", exp.char_type)

        exp.training_trial_number = "NA"

        exp.crit_trial_number = exp.crit_trial_number_count += 1

        exp.fill_trial_number = "NA"
        
        $('.white_box').html('<img src="images/white_box.png" style="width:260px">');

        $('.white_box').show();

        $(".type").html(stim.type);
        console.log("type:", stim.type);

        exp.item = stim.item;
        $(".item").html(exp.item);
        console.log("item:", exp.item);

        if (exp.item.includes("shopping")) {
          exp.stakes = "high"
        } else if (exp.item.includes("bank")) {
          exp.stakes = "high"
        } else {
          exp.stakes = "low"
        };
        console.log("stakes:", exp.stakes)

        if (exp.char_type == 'nerd') {
          exp.current_char1 = exp.nerd_char1
        } else {
          exp.current_char1 = exp.hippie_char1
        }
        console.log("character 1:", exp.current_char1);

        if (exp.char_type == 'nerd') {
          exp.current_char2 = exp.nerd_char2
        } else {
          exp.current_char2 = exp.hippie_char2
        }
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
        exp.time = exp.time_matrix[0];
        exp.phone_time = _.sample(exp.time_matrix);
        console.log("phone time:", exp.phone_time);
        exp.phone_time_file = exp.phone_time.replace(":", ".");

        if (exp.phone_time == "3:00") {
          exp.condition = "m"
        } else if (exp.phone_time == "1:30") {
          exp.condition = "m"
        } else if (exp.phone_time == "8:00") {
          exp.condition = "m"
        } else if (exp.phone_time == "9:30") {
          exp.condition = "m"

        } else if (exp.phone_time == "2:59") {
          exp.condition = "nnm"
        } else if (exp.phone_time == "1:33") {
          exp.condition = "nnm"
        } else if (exp.phone_time == "8:02") {
          exp.condition = "nnm"
        } else if (exp.phone_time == "9:26") {
          exp.condition = "nnm"

        } else if (exp.phone_time == "2:51") {
          exp.condition = "nm"
        } else if (exp.phone_time == "1:41") {
          exp.condition = "nm"
        } else if (exp.phone_time == "8:13") {
          exp.condition = "nm"
        } else if (exp.phone_time == "9:23") {
          exp.condition = "nm"

        } else {
          exp.condition = "mm"
        }
        console.log("condition:", exp.condition);

        if (exp.condition == "nnm") {
          exp.tri_condition = "imprecise"
        } else if (exp.condition == "nm") {
          exp.tri_condition = "imprecise"
        } else if (exp.condition == "mm") {
          exp.tri_condition = "mismatch"
        } else {
          exp.tri_condition = "match"
        }
        console.log("three-way condition:", exp.tri_condition);


        exp.bubble_time = exp.time.replace(":", ".")

        exp.answer_bubble = '<img src="images/'+ exp.bubble_time + '.png'+'" style="height:150px">';

        $(".answer").html(exp.answer_bubble);
        console.log("answer:", exp.answer_bubble);


        if (exp.char_type == 'nerd') {
          exp.image1 = exp.nerd_image1
        } else {
          exp.image1 = exp.hippie_image1
        }
        console.log("image 1:", exp.image1);

        if (exp.char_type == 'nerd') {
          exp.image2 = exp.nerd_image2
        } else {
          exp.image2 = exp.hippie_image2
        }
        console.log("image 2:", exp.image2);

        

        if (exp.image1.includes("guy")) {
          exp.questioner_gender = "male"
        } else {
          exp.questioner_gender = "female"
        };
        console.log("questioner gender:", exp.questioner_gender)

        if (exp.image2.includes("guy")) {
          exp.answerer_gender = "male"
        } else {
          exp.answerer_gender = "female"
        };
        console.log("answerer gender:", exp.answerer_gender)

        exp.person1_pic = '<img src="images/'+exp.image1 + '.png'+'" style="height:250px">';
        $(".person1_pic").html(exp.person1_pic);

        exp.person2_pic = '<img src="images/'+exp.image2 + '.png'+'" style="height:250px">';
        $(".person2_pic").html(exp.person2_pic);



        exp.prompt = stim.prompt.replace("person2", exp.current_char2);
        $(".prompt").html(exp.prompt);

        exp.phone_img = '<img src="images/'+'phone_'+exp.phone_time_file + '.png'+'" style="height:250px">';
        $('.phone').html(exp.phone_img)

        exp.phone_back_img = '<img src="images/phone_back.png" style="height:250px">';
        $('.phone_back').html(exp.phone_back_img)


      } else {

        exp.training_trial_number = "NA"

        exp.fill_trial_number = exp.fill_trial_number_count += 1

        exp.crit_trial_number = "NA"

        $('.white_box').html('<img src="images/white_box.png" style="width:260px">');

        $('.white_box').show();

        $(".type").html(stim.type);
        console.log("type:", stim.type)

        exp.item = stim.item;
        $(".item").html(exp.item);
        console.log("item:", stim.item)

        if (exp.item.includes("cafe")) {
          exp.stakes = "high"
        } else if (exp.item.includes("party")) {
          exp.stakes = "high"
        } else {
          exp.stakes = "low"
        };
        console.log("stakes:", exp.stakes)

        exp.current_char1 = exp.filler_char1
        console.log("character 1:", exp.current_char1)

        exp.current_char2 = exp.filler_char2
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

        if (exp.item.includes("party")) {
          exp.answer = 'some_are'
        } else {
          exp.answer = 'some_do'
        }

        exp.answer_bubble = '<img src="images/'+ exp.answer + '.png'+'" style="height:150px">';

        $(".answer").html(exp.answer_bubble);
        console.log("answer:", exp.answer_bubble);




        exp.time = "none";
        exp.phone_time = "none";

        if (exp.item.includes("cafe")) {
          exp.condition = "somebutnotall"
        } else if (exp.item.includes("flight")) {
          exp.condition = "somebutnotall"
        } else if (exp.item.includes("party")) {
          exp.condition = "someandall"
        } else {
          exp.condition = "false"
        }

        exp.tri_condition = "none";


        exp.image1 = exp.filler_image1
        console.log("image 1:", exp.image1);
        exp.image2 = exp.filler_image2
        console.log("image 2:", exp.image2);

        exp.char_type = "fill"
        console.log("character type:", exp.char_type)

        if (exp.image1.includes("guy")) {
          exp.questioner_gender = "male"
        } else {
          exp.questioner_gender = "female"
        };
        console.log("questioner gender:", exp.questioner_gender)

        if (exp.image2.includes("guy")) {
          exp.answerer_gender = "male"
        } else {
          exp.answerer_gender = "female"
        };
        console.log("answerer gender:", exp.answerer_gender)

        exp.person1_pic = '<img src="images/'+exp.image1 + '.png'+'" style="height:250px">';
        $(".person1_pic").html(exp.person1_pic);

        exp.person2_pic = '<img src="images/'+exp.image2 + '.png'+'" style="height:250px">';
        $(".person2_pic").html(exp.person2_pic);


        exp.prompt = stim.prompt.replace("person2", exp.current_char2);
        exp.prompt = exp.prompt.replace("person1", exp.current_char1);
        $(".prompt").html(exp.prompt);


        exp.phone_img = '<img src="images/'+exp.item + '_phone' + '.png'+'" style="height:250px">';
        $('.phone').html(exp.phone_img)

        exp.phone_back_img = '<img src="images/phone_back.png" style="height:250px">';
        $('.phone_back').html(exp.phone_back_img)


      }

      var allow_key_press = 0;

      $('.scenario').show();
      $('.question').show();
      $('.answer').show();
      $('.person1_pic').show();
      $('.person2_pic').show();
      setTimeout(function() {
        $('.white_box').hide();
        $('.prompt').show();
        $('.phone').show();
        $('.phone_back').show();
        allow_key_press = 1;
      }, 3000)
      

      $(document).ready(function() {
        $('.phone').click(function() {
          if (allow_key_press=="1") {
            console.log("visible phone selected")
            exp.response = "visible"
            $('.button').show();
          }
        })
      })

      $(document).ready(function() {
        $('.phone_back').click(function() {
          if (allow_key_press=="1") {
            console.log("covered phone selected")
            exp.response = "covered"
            $('.button').show();
          }
        })
      })

    },

    button: function() {
      exp.endTrial = Date.now();
      this.log_responses();
      _stream.apply(this);
    },

    log_responses: function () {
      exp.data_trials.push({
        "training_trial_number": exp.training_trial_number,
        "trial_number": exp.trial_number,
        "crit_trial_number": exp.crit_trial_number,
        "fill_trial_number": exp.fill_trial_number,
        "trial_type": this.stim.type,
        "item": this.stim.item,
        "stakes": exp.stakes,
        "name1": exp.current_char1,
        "name2": exp.current_char2,
        "character_type": exp.char_type,
        "image1": exp.image1,
        "image2": exp.image2,
        "questioner gender": exp.questioner_gender,
        "answerer gender": exp.answerer_gender,
        "time": exp.time,
        "phone time": exp.phone_time,
        "match condition": exp.condition,
        "three-way condition": exp.tri_condition,
        "response": exp.response,
        "trial_time_minutes": (exp.endTrial - exp.startTrial) / 60000
      })
    }

  });




  // set up interim instructions slide
  slides.interim3 = slide({
    name: "interim3",
    button: function() {
      exp.go();
    }
  });




  slides.self_id = slide({
    name: "self_id",

    start: function() {
      exp.startID = Date.now();
      $('.self_id1_char_1').hide();
      $('.self_id1_char_2').hide();
      $('.self_id1_prompt').hide();
      $('#self_id1_slider').hide();
      $('#self_id1').hide();
      $('.button1').hide();
      $('.tickmarks1').hide();

      $('.self_id2_char_1').hide();
      $('.self_id2_char_2').hide();
      $('.self_id2_prompt').hide();
      $('#self_id2_slider').hide();
      $('#self_id2').hide();
      $('.button2').hide();
      $('.tickmarks2').hide();

      $('.white_box2').html('<img src="images/white_box.png" style="width:360px">');

      exp.pair1 = _.sample(["nerd", "hippie"])

      if (exp.pair1 == "nerd") {
        exp.pair2 = "hippie"
      } else {
        exp.pair2 = "nerd"
      }
      console.log("first pair:", exp.pair1);
      console.log("second pair:", exp.pair2);

      if (exp.pair1 == "nerd") {
        exp.char_1_1 = exp.nerd_image1
        exp.char_1_2 = exp.nerd_image2
      } else {
        exp.char_1_1 = exp.hippie_image1
        exp.char_1_2 = exp.hippie_image2
      }

      if (exp.pair2 == "nerd") {
        exp.char_2_1 = exp.nerd_image1
        exp.char_2_2 = exp.nerd_image2
      } else {
        exp.char_2_1 = exp.hippie_image1
        exp.char_2_2 = exp.hippie_image2
      }

      console.log("current characters:", [exp.char_1_1, exp.char_1_2, exp.char_2_1, exp.char_2_2])


      exp.char_1_1_image = '<img src="images/'+exp.char_1_1 + '.png'+'" style="height:250px">';
      exp.char_1_2_image = '<img src="images/'+exp.char_1_2 + '.png'+'" style="height:250px">';

      exp.char_2_1_image = '<img src="images/'+exp.char_2_1 + '.png'+'" style="height:250px">';
      exp.char_2_2_image = '<img src="images/'+exp.char_2_2 + '.png'+'" style="height:250px">';


      if (exp.char_1_1_image.includes("nerd")) {
        exp.char_group1 = "nerd"
      } else if (exp.char_1_1_image.includes("hippie")) {
        exp.char_group1 = "hippie"
      } else {
        exp.char_group1 = "filler"
      };
      console.log("char_group1:", exp.char_group1)


      $('.self_id1_char_1').html(exp.char_1_1_image);
      $('.self_id1_char_2').html(exp.char_1_2_image);

      $('.self_id2_char_1').html(exp.char_2_1_image);
      $('.self_id2_char_2').html(exp.char_2_2_image);



      var rangeslider_self_id1 = document.getElementById("self_id1_slider");
        exp.output_self_id1 = document.getElementById("self_id1");
        exp.output_self_id1.innerHTML = rangeslider_self_id1.value;
  
        rangeslider_self_id1.oninput = function() {
          exp.output_self_id1.innerHTML = this.value;
        }

      var rangeslider_self_id2 = document.getElementById("self_id2_slider");
        exp.output_self_id2 = document.getElementById("self_id2");
        exp.output_self_id2.innerHTML = rangeslider_self_id2.value;
  
        rangeslider_self_id2.oninput = function() {
          exp.output_self_id2.innerHTML = this.value;
        }


      setTimeout(function() {
        $('.self_id1_char_1').show();
        $('.self_id1_char_2').show();
        $('.self_id1_prompt').show();
        $('#self_id1_slider').show();
        $('.button1').show();
        $('.tickmarks1').show();
      }, 2000)

      

    },

    button1: function() {
      $('.self_id1_char_1').hide();
      $('.self_id1_char_2').hide();
      $('.self_id1_prompt').hide();
      $('#self_id1_slider').hide();
      $('.button1').hide();
      $('.tickmarks1').hide();

      $('.self_id2_char_1').show();
      $('.self_id2_char_2').show();
      $('.self_id2_prompt').show();
      $('#self_id2_slider').show();
      $('.button2').show();
      $('.tickmarks2').show();
    },

    button2: function() {
      exp.endID = Date.now();
      // this.log_responses();
      this.submit()
      exp.go();
    },


    submit: function (e) {
      exp.id_data = {
        critical_char_group: exp.cf,
        char_group1: exp.pair1,
        char_group2: exp.pair2,
        self_id_image1: exp.char_1_1,
        self_id_image2: exp.char_1_2,
        self_id_image3: exp.char_2_1,
        self_id_image4: exp.char_2_2,
        self_id1: exp.output_self_id1.innerHTML,
        self_id2: exp.output_self_id2.innerHTML,
        trial_time_minutes: (exp.endID - exp.startID) / 60000
      }
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
        "id_data": exp.id_data,
        "system": exp.system,
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
  
  exp.intro = intro_stim;
  exp.training = training_stims;

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



  exp.cf = _.sample(["nerd", "hippie"]); //can randomize between subjects conditions here
  console.log("characterological figure:", exp.cf)


  // exp.condition = _.shuffle(["m","m","m","m","m","m","mm","mm","mm","mm","mm","mm","nm","nm","nm","nm","nm","nm","nnm","nnm","nnm","nnm","nnm","nnm"])
  // console.log("condition:", exp.condition)

  exp.chars = _.shuffle(["Alex", "Sam", "Dakota", "Taylor", "Ash", "Casey", "Devin", "Riley", "Jessie", "Jamie", "Quinn", "Jordan", "Morgan", "Skyler", "Shawn", "Kendall"])
  console.log("char_order:", exp.chars)

  exp.intro_char1 = exp.chars.shift();
  exp.intro_char2 = exp.chars.shift();

  exp.training_char1 = exp.chars.shift();
  exp.training_char2 = exp.chars.shift();

  exp.nerd_char1 = exp.chars.shift();
  exp.nerd_char2 = exp.chars.shift();

  exp.hippie_char1 = exp.chars.shift();
  exp.hippie_char2 = exp.chars.shift();

  exp.filler_char1 = exp.chars.shift();
  exp.filler_char2 = exp.chars.shift();

  exp.nerd_images = _.shuffle(["nerd_guy1", "nerd_guy2", "nerd_girl1", "nerd_girl2"])

  exp.nerd_image1 = exp.nerd_images.shift();
  exp.nerd_image2 = exp.nerd_images.shift();

  exp.hippie_images = _.shuffle(["hippie_guy1", "hippie_guy2", "hippie_girl1", "hippie_girl2"])

  exp.hippie_image1 = exp.hippie_images.shift();
  exp.hippie_image2 = exp.hippie_images.shift();

  exp.fill_images = _.shuffle(["filler_girl1", "filler_girl2", "filler_girl3", "filler_girl4", "filler_guy1", "filler_guy2", "filler_guy3", "filler_guy4"])
  console.log("fill image order:", exp.fill_images);

  exp.intro_image1 = exp.fill_images.shift();
  exp.intro_image2 = exp.fill_images.shift();

  exp.training_image1 = exp.fill_images.shift();
  exp.training_image2 = exp.fill_images.shift();

  exp.filler_image1 = exp.fill_images.shift();
  exp.filler_image2 = exp.fill_images.shift();



  exp.times = _.shuffle([["3:00", "2:59", "2:51", "11:22"], ["1:30", "1:33", "1:41", "8:45"], ["8:00", "8:02", "8:13", "5:34"], ["9:30", "9:26", "9:23", "3:18"]])
  console.log("times order:", exp.times);


  // function makeStims(cond, i) {
  //   stims[i].condition = cond;
  // }

  // var makeStims = function(cond,i) {
  //   stimuli[i].condition = cond;
  // }
  // console.log("condition", cond)
  
  exp.trial_number = 0

  exp.training_trial_number = 0

  exp.crit_trial_number_count = 0

  exp.fill_trial_number_count = 0

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
    "intro",
    "interim1",
    "training",
    "interim2",
    "trial",
    "interim3",
    "self_id",
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
