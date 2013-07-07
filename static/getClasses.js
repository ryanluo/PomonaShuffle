var getClasses = {};

getClasses.constanants = 'b c d f g k l m n p q r s t v x z'.split(' ');
getClasses.vowels = 'a e i o u y'.split(' ');
getClasses.categories = 'alkali alkaline-earth lanthanoid actinoid transition post-transition'.split(' ');
getClasses.suffices = 'on ium ogen'.split(' ');

getClasses.getRandom = function( property ) {
  var values = getClasses[ property ];
  return values[ Math.floor( Math.random() * values.length ) ];
};
// <div class='card ' id='box{{ i % 3 }}'>
//         <div class='subcard {{course_list[i]['favorite']}}'>
//         <div class="cardNumber">{{i+1}}</div>
//         <div style="width: 100%; background-color: #015C65; border-top-right-radius: 15px;
// -moz-border-radius-topright: 15px;"> <h1 class="classTitle" style="text-align:center;">{{course_list[i]['name']}}</h1> </div>
//         <h3 style="position: relative; text-align:center;">{{course_list[i]['major']}}{{course_list[i]['number']}} &#151 {{course_list[i]['teacher']}} ({{course_list[i]["school"]}})</h3>
//         <p style="position: absolute; left: 10px; right:10px;">{{course_list[i]['description']}}</p>
//       </div>
//       </div>
getClasses.create = function(NAME,MAJOR,NUMBER,TEACHER,SCHOOL,DESCRIPTION) {
  var name = NAME;
      major = MAJOR;
      number = NUMBER;
      teacher = TEACHER;
      school = SCHOOL;
      description = DESCRIPTION;
      
  return '<div class="card " id="box{{ i % 3 }}"><div class="subcard {{course_list[i]["favorite"]}}"><div class="cardNumber">{{i+1}}</div><div style="width: 100%; background-color: #015C65; border-top-right-radius: 15px;
// -moz-border-radius-topright: 15px;"> <h1 class="classTitle" style="text-align:center;">' + name + '</h1> </div><h3 style="position: relative; text-align:center;">' + major + number + ' &#151 ' + teacher + ' ' + school +'</h3
<p style="position: absolute; left: 10px; right:10px;">'+description+'</p></div></div>'
};

getClasses.getGroup = function(NAME,MAJOR,NUMBER,TEACHER,SCHOOL,DESCRIPTION) {
  var newEls = '';
  newEls += getClasses.create(NAME,MAJOR,NUMBER,TEACHER,SCHOOL,DESCRIPTION);
  return newEls;
};