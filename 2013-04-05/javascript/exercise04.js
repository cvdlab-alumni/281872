//All windows colored in black by vertical enclosures

T = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
     return object.clone().translate(dims, values);
    };
  };
};
  
R = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });
   
  return function (angle) {
    return function (object) {
      return object.clone().rotate(dims, angle);
    };
  };
};
  
S = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
      return object.clone().scale(dims, values);
    };
  };
};

S3 = S2;
S2 = S1;
S1 = S0;

CYLINDER = CYL_SURFACE;

GRID = SIMPLEX_GRID;

NN = REPLICA;

VIEW = DRAW;

//  south windows


var w1 = GRID([[0.2],[-0.5,2.2],[-5.1,0.2]]);
var w2 = GRID([[0.2],[-0.5,2.2],[-7.25,0.2]]);
var w3 = GRID([[0.2],[-0.5,2.2],[-9.4,0.2]]);
var w4 = GRID([[0.2],[-2.7,0.2],[-5.1,4.5]]);
var bw = STRUCT([w1,w2,w3,w4]);


var allw1 = STRUCT([bw,T([2])([2.4])(bw),T([2])([4.8])(bw),T([2])([7])(bw)]);
var allw  = STRUCT([allw1,T([3])([5.1])(allw1)]);
var allwBlack = COLOR(0,0,0)(allw);

var south = STRUCT([grid5,grid6,grid7,grid8,allwBlack]);

// west windows

var q7 = GRID([[-11.6,-2.25,0.2,-5],[1],[-7.35,2.25]]);
var q7Black = COLOR(0,0,0)(q7);
var west = T([2])([11.7])(STRUCT([q1,q2,q3,q4,q5,q6,q7Black]));

// est windows 

var w4 = GRID([[-10.9,-2.25,0.2],[1],[-4.5,-2.85,2.25,-2.85,2.25,-2.85,2.25,-2]]);
var w4Black = COLOR(0,0,0)(w4);
var est = STRUCT([gr1,gr2,gr3,w4Black]);

// north windows

var swtmp = GRID([[1],[-2.35,0.2],[-7.1,2]]);
var sw1 = STRUCT([swtmp,T([2])([2.05])(swtmp),T([2])([4.1])(swtmp)]);
var sw2 = GRID([[1],[-11.2,1],[-7.35,0.2]]);

var sw1Black = COLOR(0,0,0)(sw1);
var sw2Black = COLOR(0,0,0)(sw2);

var comb = STRUCT([q10,q11,q12,q13,q14,q15,q16,sw1Black,sw2Black]);
var comb2 = T([3])([5.1])(comb);
var comb3 = T([3])([10.2])(comb);

var eNorth = STRUCT([q9,comb,comb2,comb3]); 

var north = T([1])([21.3])(eNorth);

var building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,south,west,est,north]);