###floor0

base= INSR(PROD)(AA(QUOTE)([[21.3],[12.7]]))

q = T([1,2])([2.9,4.5])(INSR(PROD)(AA(QUOTE)([[13.2],[8.2],[0.6]])))

cylinderp =T([1,2])([4,3.7])(CYLINDER([1.1,0.6])(32))

rectmin= T([1,2])([2.9,3.7])(CUBOID([2.2,0.8,0.6]))

semicircp= STRUCT([cylinderp,rectmin])

cylinderg =T([1,2])([17.8,10.25])(CYLINDER([2.46,0.6])(32))

rectmin2= T([1,2])([18,7.8])(R([1,2])(PI/2)(CUBOID([4.9,2.1,0.6])))

semicircg= STRUCT([cylinderg,rectmin2])

quadrato=T([2])([10])(CUBOID([2.9,2.7,0.6]))

quadratop=T([1,2])([16,6.3])(CUBOID([0.6,1.5,0.6]))

floor0=STRUCT([base,semicircp,q,semicircg,quadrato,quadratop])


###floor1

pav1 = CUBOID([21.3,0.5,0.6])

pav2 = CUBOID([9,12.2,0.6])

pav3 = CUBOID([2.5,10.5,0.6])

pav4 = CUBOID([9.8,12.2,0.6])

pavimento = STRUCT([pav2,T(2)(12.2)(pav1),T(1)(9)(pav3),T(1)(11.5)(pav4)])

bal = CUBOID([2,2,0.6])

ante1 = CUBOID([2,0.2,2])

ante2 = CUBOID([0.2,2,2])

ante3 = T(2)(1.8)(ante1)

balcone = STRUCT([bal,ante1,ante2,ante3])

floortmp = STRUCT([pavimento,T([1,2])([-2,10.3])(balcone)])

floor1 = T(3)(4.5)(floortmp)

###floor2

pav1 = CUBOID([21.3,0.5,0.6])

pav2 = CUBOID([10.3,12.2,0.6])

pav3 = CUBOID([3.5,10.5,0.6])

pav4 = CUBOID([7.5,12.2,0.6])

pavimento2 = STRUCT([pav2,T(2)(12.2)(pav1),T(1)(10.3)(pav3),T(1)(13.8)(pav4)])

floor2 = T(3)(9.6)(pavimento2)

###floor3


pav1 = CUBOID([21.3,0.5,0.6])

pav2 = CUBOID([11.3,12.2,0.6])

pav3 = CUBOID([3.5,10.5,0.6])

pav4 = CUBOID([6.5,12.2,0.6])

pavimento3 = STRUCT([pav2,T(2)(12.2)(pav1),T(1)(11.3)(pav3),T(1)(14.8)(pav4)])

floor3 = T(3)(14.7)(pavimento3)

###floor4

pav1 = T(2)(9.7)(CUBOID([21.3,3,0.6]))

pav2 = T(1)(10.4)(CUBOID([10.9,12.7,0.6]))

pavimento4 = STRUCT([pav1,pav2])

floor4 = T(3)(19.8)(pavimento4)

building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4])
