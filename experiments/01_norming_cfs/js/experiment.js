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
    // start: function() {
    // },
    button: function() {
      exp.go();
    }
  });






  slides.trial = slide({
    name: "trial",
    start :function() {
      $('.prompt').hide();
      $('.descriptor_boxes').hide();
      $('.no_go').hide()
      $('.prompt2').hide();
      $('.label_box').hide();
      $('.no_label').hide();
      $('.space_msg_all').hide();
      $('#desc1').val("");
      $('#desc2').val("");
      $('#desc3').val("");
      $('#desc4').val("");
      $('#label_ans').val("");

      exp.trial_number += 1

      // exp.name = exp.names.shift();
      // console.log("name:", exp.name)

      // exp.image = exp.images.shift();
      // console.log("image:", exp.image)

      $(".name").html(exp.name);

      $(".image").html(exp.image);


      var picture = '<img src="images/'+ exp.image + '.png'+'" style="height:350px">';
      $(".picture").html(picture);

      $('.person1').html(exp.name);

      setTimeout(function() {
        $('.prompt').show()
        $('.descriptor_boxes').show()
        }, 3000)
    },

    // next_button: function() {
    //   if ($('#desc1').val() != "" && 
    //     $('#desc2').val() != "" && 
    //     $('#desc3').val() != "" && 
    //     $('#desc4').val() != "") {
    //       $('.no_go').hide()
    //       $('.prompt2').show()
    //       $('.label_box').show()
    //   } else {
    //     $('.no_go').show()
    //   }
    // },

    next_button: function() {
      if ($('#desc1').val().length >= 3 && 
        $('#desc2').val().length >= 3 && 
        $('#desc3').val().length >= 3 && 
        $('#desc4').val().length >= 3 &&
        $('#desc1').val() != $('#desc2').val() &&
        $('#desc1').val() != $('#desc3').val() &&
        $('#desc1').val() != $('#desc4').val() &&
        $('#desc2').val() != $('#desc3').val() &&
        $('#desc2').val() != $('#desc4').val() &&
        $('#desc3').val() != $('#desc4').val()) {
          $('.no_go').hide()
          $('.prompt2').show()
          $('.label_box').show()
      } else {
        $('.no_go').show()
      }
    },

    continue_button: function() {
      // if ($('#label_ans').val() != "") {
      if ($('#label_ans').val().length >= 3) {
        $('.no_label').hide()
        _s.log_responses()
        // if (exp.names.length != 0) {
        //   _s.start()
        // } else {
        exp.go()
        // }
      } else {
        $('.no_label').show()
      }
    },

    log_responses: function () {
      exp.data_trials.push({
        "trial_number": exp.trial_number,
        "image": exp.image,
        "name": exp.name,
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
  exp.trials = [];



  exp.all_names = _.shuffle(["Alex", "Sam", "Dakota", "Taylor", "Ash", "Casey", "Devin", "Riley", "Jessie", "Jamie", "Quinn", "Jordan", "Morgan", "Skyler", "Shawn", "Kendall"])

  // exp.names = [];
  // exp.names.push(exp.all_names.shift());
  // exp.names.push(exp.all_names.shift());
  // exp.names.push(exp.all_names.shift());
  // // exp.names.push(exp.all_names.shift());
  // // exp.names.push(exp.all_names.shift());
  // // exp.names.push(exp.all_names.shift());
  // console.log("char_order:", exp.names)

  exp.name = exp.all_names.shift();
  console.log("name:", exp.name)

  // exp.all_images = _.shuffle(["nerd_guy1", "nerd_guy2", "nerd_girl1", "nerd_girl2", "skater_guy1", "skater_guy2", "skater_girl1", "skater_girl2", "hippie_guy1", "hippie_guy2", "hippie_girl1", "hippie_girl2"])

  // exp.images = [];
  // exp.images.push(exp.all_images.shift());
  // exp.images.push(exp.all_images.shift());
  // exp.images.push(exp.all_images.shift());
  // exp.images.push(exp.all_images.shift());
  // exp.images.push(exp.all_images.shift());
  // exp.images.push(exp.all_images.shift());
  // console.log("image_order:", exp.images)

  // use the above if using six images of whatever category; the below for three images, one from each category (randomized both before and after selection)

  // exp.nerd_images = _.shuffle(["nerd_guy1", "nerd_guy2", "nerd_girl1", "nerd_girl2"])

  // exp.skater_images = _.shuffle(["skater_guy1", "skater_guy2", "skater_girl1", "skater_girl2"])

  // exp.hippie_images = _.shuffle(["hippie_guy1", "hippie_guy2", "hippie_girl1", "hippie_girl2"])

  // exp.unshuffled_images = [];
  // exp.unshuffled_images.push(exp.nerd_images.shift());
  // exp.unshuffled_images.push(exp.skater_images.shift());
  // exp.unshuffled_images.push(exp.hippie_images.shift());
  // exp.images = _.shuffle(exp.unshuffled_images)
  // console.log("image_order:", exp.images)


  // here below, for choosing just one image from all the images

  exp.all_images = _.shuffle(["nerd_guy1", "nerd_guy2", "nerd_girl1", "nerd_girl2", "skater_guy1", "skater_guy2", "skater_girl1", "skater_girl2", "hippie_guy1", "hippie_guy2", "hippie_girl1", "hippie_girl2"])

  exp.image = exp.all_images.shift();
  console.log("image:", exp.image)


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
