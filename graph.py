import matplotlib.pyplot as plt

collect = [[12.53,8.0,23.66]]

fig = plt.figure()
plt.boxplot(collect, labels=["Original"])
fig.suptitle('Latencia - Aplicación Original', fontsize=14)
plt.ylabel("Latencia")
fig.savefig('original.jpg')

collect = [[8.86,3.32,10.66]]
fig = plt.figure()
plt.boxplot(collect, labels=["Mejorado"])
fig.suptitle('Latencia - Aplicación Actualizada', fontsize=14)
plt.ylabel("Latencia")
fig.savefig('mejorado.jpg')

collect = [[12.53,8.0,23.66],[8.86,3.32,10.66]]
fig = plt.figure()
plt.boxplot(collect, labels=["Original", "Mejorado"])
fig.suptitle('Latencia - Comparativa ente aplicaciones', fontsize=14)
plt.ylabel("Latencia")
fig.savefig('comparativa.jpg')
