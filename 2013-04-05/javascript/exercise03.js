//vertical enclosures

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

// south


var grid5 = GRID([[1],[12.7],[-4.5,0.6,-4.5,0.6,-4.5,2.1,-3,2]]);
var grid6 = GRID([[1],[0.5,-9.4,0.5,-1.6,0.7],[-5.1,4.5]]);
var grid7 = GRID([[1],[0.5,-9.4,2.8],[-10.2,4.5]]);
var grid8 = GRID([[1],[0.5,-9.4,0.25,-2.3,0.25],[-15.3,4.5]]);

var w1 = GRID([[0.2],[-0.5,2.2],[-5.1,0.2]]);
var w2 = GRID([[0.2],[-0.5,2.2],[-7.25,0.2]]);
var w3 = GRID([[0.2],[-0.5,2.2],[-9.4,0.2]]);
var w4 = GRID([[0.2],[-2.7,0.2],[-5.1,4.5]]);
var bw = STRUCT([w1,w2,w3,w4]);


var allw1  = STRUCT([bw,T([2])([2.4])(bw),T([2])([4.8])(bw),T([2])([7])(bw)]);
var allw  = STRUCT([allw1,T([3])([5.1])(allw1)]);

var south = STRUCT([grid5,grid6,grid7,grid8,allw]);

// west


var q1 = GRID([[21.3],[1],[-4.5,2.85,-2.25,2.85,-2.25,7.1]]);
var q2 = GRID([[14.3,-1,3,-3],[1],[4.5]]);
var q3 = GRID([[-14.3,1,-6],[1],[3]]);
var q4 = GRID([[-14.3,1,-6],[1],[-4,0.5]]);
var q5 = GRID([[11.6,-4.7,5],[1],[-7.35,2.25]]);
var q6 = GRID([[17.3,-0.25,1,-0.25,2.5],[1],[-12.45,2.25]]);
var q7 = GRID([[-11.6,-2.25,0.2,-5],[1],[-7.35,2.25]]);
var west = T([2])([11.7])(STRUCT([q1,q2,q3,q4,q5,q6,q7]));

// est

var gr1 = GRID([[10.4],[1],[-4.5,12.3,-3,2]]);
var gr2 = GRID([[-10.4,0.5,-4.7,5.7],[1],[-4.5,17.3]]);
var gr3 = GRID([[-10.9,4.7],[1],[-4.5,2.85,-2.25,2.85,-2.25,2.85,-2.25,2]]);
var w4 = GRID([[-10.9,-2.25,0.2],[1],[-4.5,-2.85,2.25,-2.85,2.25,-2.85,2.25,-2]]);
var est = STRUCT([gr1,gr2,gr3,w4]);


//north

var q9 = GRID([[1],[12.7],[-4.5,0.6,-4.5,0.6,-4.5,0.6,-4.5,2]]);
var q10 = GRID([[1],[0.5],[-5.1,4.5]]);
var q11 = GRID([[1],[-0.5,8],[-5.1,2]]);
var q12 = GRID([[1],[-0.5,8],[-9.1,0.5]]);
var q13 = GRID([[1],[-8.5,2.7],[-5.1,4.5]]);
var q14 = GRID([[1],[-11.2,1],[-5.1,0.3]]);
var q15 = GRID([[1],[-11.2,1],[-9.3,0.3]]);
var q16 = GRID([[1],[-12.2,0.5],[-5.1,4.5]]);

var swtmp = GRID([[1],[-2.35,0.2],[-7.1,2]]);
var sw1 = STRUCT([swtmp,T([2])([2.05])(swtmp),T([2])([4.1])(swtmp)]);
var sw2 = GRID([[1],[-11.2,1],[-7.35,0.2]]);

var comb = STRUCT([q10,q11,q12,q13,q14,q15,q16,sw1,sw2]);
var comb2 = T([3])([5.1])(comb);
var comb3 = T([3])([10.2])(comb);
var eNorth = STRUCT([q9,comb,comb2,comb3]); 

var north = T([1])([21.3])(eNorth);

var building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,south,west,est,north]);
