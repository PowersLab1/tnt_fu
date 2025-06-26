// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Think_NoThink_V1",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "after:end": function anonymous(
) {
this.state.finalData = this.state.data;
},
        "before:prepare": function anonymous(
) {
this.state.data = {};

}
      },
      "title": "ThinkNoThink",
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "keypress(Space)": "continue"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Welcome",
          "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\" style = \"background-color: #0d3b83;\"\u003E\n  \u003Cdiv\u003E\n    \u003Cp style = \"font-family: serif;color: white; font-size:50px\" \u003E \n      Welcome to phase 2 of the study. \u003C\u002Fp\u003E\n\n    \u003Cp style = \"font-family: serif;color: white; font-size:50px\"\u003E In this phase, you will work with the image-word pairs you learned in phase 1 \u003C\u002Fp\u003E\n\n    \u003Cp style = \"font-family: serif;color: white; font-size:50px\"\u003E \u003Cbr\u003E \u003Cbr\u003E Press the \u003Cb\u003ESPACE BAR\u003C\u002Fb\u003E to proceed \u003C\u002Fp\u003E \n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.state.cue = []
this.state.indicator = []
this.state.type = []
this.state.rating = []
}
          },
          "title": "Think_No_Think",
          "content": [
            {
              "type": "lab.html.Screen",
              "files": {},
              "responses": {
                "keypress(Space)": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Think\u002FNo Think Instructions",
              "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\" style = \"background-color: #0d3b83;\"\u003E\n  \u003Cdiv\u003E\n    \u003Cp style = \"font-family: serif;color: white; font-size:40px;\" \u003E \n      In this part of the study, you will see each of the pictures that you saw in phase 1 \u003C\u002Fp\u003E\n  \u003Cp style = \"font-family: serif;color: white; font-size:40px\"\u003E The image will be surrounded by a box that is either \u003Cspan style = \"background-color: green;\"\u003E\u003Cb\u003EGREEN\u003C\u002Fb\u003E\u003C\u002Fspan\u003E or \u003Cspan style = \"background-color: red;\"\u003E\u003Cb\u003ERED\u003C\u002Fb\u003E\u003C\u002Fspan\u003E \u003Cbr\u003E \u003Cbr\u003E\u003C\u002Fp\u003E\n\n  \u003Cp style = \"font-family: serif;color: white; font-size:40px\"\u003E If the box is \u003Cspan style = \"background-color: green;\"\u003E\u003Cb\u003EGREEN\u003C\u002Fb\u003E\u003C\u002Fspan\u003E, then you should \u003Cspan style = \"background-color: green;\"\u003E\u003Cb\u003ETHINK\u003C\u002Fb\u003E\u003C\u002Fspan\u003E about the word paired with it phase 1.\u003C\u002Fp\u003E\n  \u003Cp style = \"font-family: serif;color: white; font-size:40px\"\u003E While \u003Cspan style = \"background-color: green;\"\u003E\u003Cb\u003ETHINKING\u003C\u002Fb\u003E\u003C\u002Fspan\u003E about the word, try to say it in your head as if you were hearing it \u003Cbr\u003E \u003Cbr\u003E \u003C\u002Fp\u003E \n\n  \u003Cp style = \"font-family: serif;color: white; font-size:40px\"\u003E If the box is \u003Cspan style = \"background-color: red;\"\u003E\u003Cb\u003ERED\u003C\u002Fb\u003E\u003C\u002Fspan\u003E, then you should \u003Cspan style = \"background-color: red;\"\u003E\u003Cb\u003ENOT THINK\u003C\u002Fb\u003E\u003C\u002Fspan\u003E about the word paired with it in phase 1.\u003C\u002Fp\u003E\n  \u003Cp style = \"font-family: serif;color: white; font-size:40px\"\u003E While \u003Cspan style = \"background-color: red;\"\u003E\u003Cb\u003ENOT THINKING\u003C\u002Fb\u003E\u003C\u002Fspan\u003E about the word, try to clear your mind and not think about anything\u003C\u002Fp\u003E \n\n    \u003Cp style = \"font-family: serif;color: white; font-size:40px\"\u003E \u003Cbr\u003E \u003Cbr\u003E Press the \u003Cb\u003ESPACE BAR\u003C\u002Fb\u003E to proceed \u003C\u002Fp\u003E \n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 1,
                  "Trial_Type": "not think",
                  "cue_type_overall": "not think",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 1,
                  "Trial_Type": "not think",
                  "cue_type_overall": "not think",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 2,
                  "Trial_Type": "not think",
                  "cue_type_overall": "not think",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 2,
                  "Trial_Type": "not think",
                  "cue_type_overall": "not think",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 3,
                  "Trial_Type": "not think",
                  "cue_type_overall": "not think",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 3,
                  "Trial_Type": "not think",
                  "cue_type_overall": "not think",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 4,
                  "Trial_Type": "not think",
                  "cue_type_overall": "not think",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 4,
                  "Trial_Type": "not think",
                  "cue_type_overall": "not think",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 5,
                  "Trial_Type": "not think",
                  "cue_type_overall": "not think",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 5,
                  "Trial_Type": "not think",
                  "cue_type_overall": "not think",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 6,
                  "Trial_Type": "think",
                  "cue_type_overall": "think",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 6,
                  "Trial_Type": "think",
                  "cue_type_overall": "think",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 7,
                  "Trial_Type": "think",
                  "cue_type_overall": "think",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 7,
                  "Trial_Type": "think",
                  "cue_type_overall": "think",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 8,
                  "Trial_Type": "think",
                  "cue_type_overall": "think",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 8,
                  "Trial_Type": "think",
                  "cue_type_overall": "think",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 9,
                  "Trial_Type": "think",
                  "cue_type_overall": "think",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 9,
                  "Trial_Type": "think",
                  "cue_type_overall": "think",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 10,
                  "Trial_Type": "think",
                  "cue_type_overall": "think",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 10,
                  "Trial_Type": "think",
                  "cue_type_overall": "think",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 11,
                  "Trial_Type": "not think",
                  "cue_type_overall": "switch",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 11,
                  "Trial_Type": "think",
                  "cue_type_overall": "switch",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 12,
                  "Trial_Type": "not think",
                  "cue_type_overall": "switch",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 12,
                  "Trial_Type": "think",
                  "cue_type_overall": "switch",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 13,
                  "Trial_Type": "not think",
                  "cue_type_overall": "switch",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 13,
                  "Trial_Type": "think",
                  "cue_type_overall": "switch",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 14,
                  "Trial_Type": "not think",
                  "cue_type_overall": "switch",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 14,
                  "Trial_Type": "think",
                  "cue_type_overall": "switch",
                  "presentation_number": "2"
                },
                {
                  "Indicator": "No_Think_Red_Checkerboard.png",
                  "Cue_Number": 15,
                  "Trial_Type": "not think",
                  "cue_type_overall": "switch",
                  "presentation_number": "1"
                },
                {
                  "Indicator": "Think_Green_Stripes.png",
                  "Cue_Number": 15,
                  "Trial_Type": "think",
                  "cue_type_overall": "switch",
                  "presentation_number": "2"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": ""
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


this.parameters.cue_images = shuffle(["2003-600.jpg", "2008.jpg","2017-600.jpg","2020.jpg","2021-600.jpg","2022-600.jpg", "2025-600.jpg", "2026-600.jpg","2029-600.jpg","2031.jpg", "2035-600.jpg", "2040-600.jpg", "2044-600.jpg","2047-600.jpg","2055-600.jpg", "2062-600.jpg", "2067-600.jpg", "2068-600.jpg","2076-600.png", "2078-600.png"])


this.state.i = -1
},
                "after:end": function anonymous(
) {
this.state.data["trial_data"] = {
  image: this.state.cue,
  indicator: this.state.indicator,
  type: this.state.type,
  rating: this.state.rating
};

//console.log(JSON.stringify(this.state.data.block1));
}
              },
              "title": "Think_NoThink_Trial_Block",
              "indexParameter": "Trial_Num",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Think_No_Think_Present",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": "0",
                        "top": "0",
                        "angle": 0,
                        "width": "800",
                        "height": "600",
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.Indicator] }",
                        "autoScale": false
                      },
                      {
                        "type": "image",
                        "left": "0",
                        "top": "0",
                        "angle": 0,
                        "width": 248.4,
                        "height": 251.16,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.trial_cue] }",
                        "autoScale": undefined
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "Think_Green_Stripes.png": "embedded\u002Fe04033dee2400a639c8c681059b0669f34e692509acbbc4081603ac6c2bb35e1.png",
                      "No_Think_Red_Checkerboard.png": "embedded\u002Fcede80474e17835e13e5d61df346bc5a94dab5cc46173e5aa605b93d58668f5a.png",
                      "2003-600.jpg": "embedded\u002F78f87f8961ff6e338940dab8ca54f400ade1254e8dd3c03e559c3b5d236ce905.jpg",
                      "2008.jpg": "embedded\u002F00a372d576f275083e995b62f75aed3d71628940fd120bfb9a76d0328867ba9a.jpg",
                      "2017-600.jpg": "embedded\u002F4708c2d6017775047efd435d6140936e108886c9ae9f4ad396505b674ace28cb.jpg",
                      "2020.jpg": "embedded\u002F96f5ef02e657e903a1fb26bc15c25b868e4635f40909a0915da19021faed9a11.jpg",
                      "2021-600.jpg": "embedded\u002F16e868c054ed2230d21fc6e04e6451a80a5713db52f7e4469bdda585b8912901.jpg",
                      "2022-600.jpg": "embedded\u002Fee5530a995ee80f2960aa7022914e524031713052993534e44f1d181dcc5d9f9.jpg",
                      "2025-600.jpg": "embedded\u002Fa27e1e29fef60ec1b9fd136884989ee7c51a9687618d22a401158645493dae69.jpg",
                      "2026-600.jpg": "embedded\u002F44ff26fdc9449bfcdbc353297f9d2ee18ced099dc8e6465d829ab37fa0254c3e.jpg",
                      "2029-600.jpg": "embedded\u002F64fa618d7d33c687feec42716b0a4265bcd36a03bed9fb0535127e0c49ca36a3.jpg",
                      "2031.jpg": "embedded\u002F96a86fb6cee18088c9bcc7aa30692814f6b5e56a2f918603bade43e11646e780.jpg",
                      "2035-600.jpg": "embedded\u002F97db8a78cb26f3d85f72c24479af77858ba2e3405a119a77610450c77717b754.jpg",
                      "2040-600.jpg": "embedded\u002F3407c508a1943969063b46deedd105656be4ef7626a43d247f45ba8e8b0fa9c4.jpg",
                      "2044-600.jpg": "embedded\u002F58e22f33503bd954d1e6856ca22e8a33b336fcad70b14715b76da40203f538cf.jpg",
                      "2047-600.jpg": "embedded\u002Feb4920d2f5a7793339a7b2ff2bc3489e2637c4205f3353421660a9512979419a.jpg",
                      "2055-600.jpg": "embedded\u002F0156690907d4550bc7694380eeef1e8356eb7c9f9fb0b74affba3105d12521c3.jpg",
                      "2062-600.jpg": "embedded\u002Fe58ece1ef2c67f469d85155ca253a856f89871ff5e8b5e960389ae791e949872.jpg",
                      "2067-600.jpg": "embedded\u002F984879211df01b365c1198ba1eed9c8a30a15e08f188580688b5282ff95683dc.jpg",
                      "2068-600.jpg": "embedded\u002F8dba7cf215ed706c3ca9ec8c3e892c43a88a5c0622cb425be492dfa85cd2a315.jpg",
                      "2076-600.png": "embedded\u002F6bba7bca03ca387b3e2fb5c38067bab5d11506a91c997d8dae3a993e7a3e6a4a.png",
                      "2078-600.png": "embedded\u002F096d6194abea6693d8600d879f1828a1412c6b69cd8fcb8b7b951a687219273a.png"
                    },
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {



this.parameters.trial_cue = this.parameters.cue_images = this.parameters.cue_images[this.parameters.Cue_Number]
}
                    },
                    "title": "Cue",
                    "timeout": "4000"
                  },
                  {
                    "type": "lab.html.Screen",
                    "files": {},
                    "responses": {
                      "keypress(1)": "Not at all successful",
                      "keypress(2)": "Somewhat Succesful",
                      "keypress(3)": "Moderately Successful",
                      "keypress(4)": "Mostly \u002F Completely Successful"
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "after:end": function anonymous(
) {
const that = this 

this.state.i = this.state.i + 1

that.state.cue[this.state.i] = this.parameters.cue_images[this.parameters.Cue_Number]
that.state.indicator[this.state.i] = this.parameters.Indicator
that.state.type[this.state.i] = this.parameters.cue_type_overall
that.state.rating[this.state.i] = this.state.response
}
                    },
                    "title": "success_rating_html",
                    "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\" style = \"background-color: #0d3b83;\"\u003E\n  \u003Cdiv\u003E\n    \u003Cp style = \"font-family: serif;color: white; font-size:40px\" \u003E \n      Please rate how successful you were in ${this.parameters.Trial_Type}ing about the word \u003Cbr\u003E To rate yourself, press one of the keys 1-4 to indicate how successful you were \u003Cbr\u003E \u003Cbr\u003E \u003Cspan style = \"font-size: 30px\"\u003E 1: Not at all successful \u003Cbr\u003E 2: Somewhat successful \u003Cbr\u003E 3: Moderately successful \u003Cbr\u003E 4: Mostly\u002FCompletely succesful \u003C\u002Fspan\u003E \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E"
                  }
                ]
              }
            },
            {
              "type": "lab.html.Screen",
              "files": {},
              "responses": {
                "keypress(Space)": "end"
              },
              "parameters": {},
              "messageHandlers": {
                "run": function anonymous(
) {
console.log(this.state.data)
}
              },
              "title": "End",
              "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\" style = \"background-color: #0d3b83;\"\u003E\n  \u003Cdiv\u003E\n    \u003Cp style = \"font-family: serif;color: white; font-size:50px\" \u003E \n      Great job! This is the end of phase 2. \u003C\u002Fp\u003E\n\n    \u003Cp style = \"font-family: serif;color: white; font-size:50px\"\u003E \u003Cbr\u003E \u003Cbr\u003E Press the \u003Cb\u003ESPACE BAR\u003C\u002Fb\u003E to end and proceed to phase 3 \u003C\u002Fp\u003E \n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E"
            }
          ]
        }
      ]
    }
  ]
})

// Let's go!
study.run()