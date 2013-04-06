from pyplasm import *

GRID = COMP([INSR(PROD),AA(QUOTE)])

###pillars0


cylinder = CYLINDER([0.25,4.5])(32)

cylinders = T([1,2])([0.25,0.25])(STRUCT(NN(5)([cylinder,T([1])([5.2])])))

quad = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[4.5]])

pillars0 = STRUCT([cylinders,quad])

###pillars1


pillars1 = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[0.5,-9.5,0.5],[-5.1,4.5]])

###pillars2

quad1 = GRID([[0.5,-4.7,0.5,-15.1,0.5],[0.5],[-10.2,4.5]])

quad2 = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[-10.2,4.5]])

pillars2 = STRUCT([quad1,quad2])

###pillars3

quad3 = GRID([[-10.4,0.5,-9.9,0.5],[0.5],[-15.3,4.5]])

quad4 = GRID([[0.25,-4.95,0.25],[-10,0.25],[-15.3,4.5]])

quad5 = GRID([[-10.4,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[-15.3,4.5]])

pillars3 = STRUCT([quad3,quad4,quad5])

building = STRUCT([pillars0,pillars1,pillars2,pillars3])