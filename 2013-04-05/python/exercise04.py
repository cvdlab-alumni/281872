### All windows colored in black by vertical enclosures

###  south windows

w1 = GRID([[0.2],[-0.5,2.2],[-5.1,0.2]])
w2 = GRID([[0.2],[-0.5,2.2],[-7.25,0.2]])
w3 = GRID([[0.2],[-0.5,2.2],[-9.4,0.2]])
w4 = GRID([[0.2],[-2.7,0.2],[-5.1,4.5]])
bw = STRUCT([w1,w2,w3,w4])


allw1 = STRUCT([bw,T(2)(2.4)(bw),T(2)(4.8)(bw),T(2)(7)(bw)])
allw  = STRUCT([allw1,T(3)(5.1)(allw1)])
allwBlack = COLOR(BLACK)(allw)

south = STRUCT([grid5,grid6,grid7,grid8,allwBlack])

### west windows

q7 = GRID([[-11.6,-2.25,0.2,-5],[1],[-7.35,2.25]])
q7Black = COLOR(BLACK)(q7)
west = T(2)(11.7)(STRUCT([q1,q2,q3,q4,q5,q6,q7Black]))

### est windows 

w4 = GRID([[-10.9,-2.25,0.2],[1],[-4.5,-2.85,2.25,-2.85,2.25,-2.85,2.25,-2]])
w4Black = COLOR(BLACK)(w4)
est = STRUCT([gr1,gr2,gr3,w4Black])

### north windows

swtmp = GRID([[1],[-2.35,0.2],[-7.1,2]])
sw1 = STRUCT([swtmp,T(2)(2.05)(swtmp),T(2)(4.1)(swtmp)])
sw2 = GRID([[1],[-11.2,1],[-7.35,0.2]])

sw1Black = COLOR(BLACK)(sw1)
sw2Black = COLOR(BLACK)(sw2)

comb = STRUCT([q10,q11,q12,q13,q14,q15,q16,sw1Black,sw2Black])
comb2 = T([3])([5.1])(comb)
comb3 = T([3])([10.2])(comb)

eNorth = STRUCT([q9,comb,comb2,comb3]) 

north = T([1])([21.3])(eNorth)

building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,south,west,est,north])