### stairs 

step2D = MKPOL([[[0,0],[0,1.1],[0.6,0.5],[0.6,1.1]],
[[1,2,3,4]],None])
step3D = MAP([S1,S3,S2])(PROD([step2D,Q(2)]))

stair = STRUCT(NN(9)([step3D,T([1,3])([0.6,0.5])]))

### stair1
stair1 = T([1,2])([5.9,10.7])(stair)
### stair2
stair2 = T([1,2,3])([8,10.3,4.5])(stair)
### stair3
stair3 = T([1,2,3])([9.7,10.5,9.6])(stair)


building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,south,west,est,north,stair1,stair2,stair3])
