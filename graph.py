import matplotlib.pyplot as plt

collect = [[12.53,8.0,23.66]]
plt.boxplot(collect, labels=["Original"])
plt.savefig("original.jpg")
plt.show()
plt.cla()

collect = [[8.86,3.32,10.66]]
plt.boxplot(collect, labels=["Mejorado"])
plt.savefig("mejorado.jpg")
plt.show()
plt.cla()

collect = [[12.53,8.0,23.66],[8.86,3.32,10.66]]
plt.boxplot(collect, labels=["Original", "Mejorado"])
plt.savefig("comparativa.jpg")
plt.show()
plt.cla()
