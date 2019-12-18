import pandas as pd 
from matplotlib import pyplot as plt
from sklearn.cluster import KMeans
import numpy as np
import json

data = pd.read_csv('small_resident_data.csv')
df = pd.DataFrame(data)
df = df.drop(['ResidentID'], axis=1)
print(df.head())
for i, name in enumerate(df.columns[:len(df.columns)-1]):
    xpoint = df[name]
    for i in range(i, len(df.columns)-1):
        ypoint = df[df.columns[i+1]]
        x = np.array(list(zip(xpoint, ypoint)))
        plt.scatter(x[:,0], x[:,1])
        plt.plot(np.unique(x[:,0]), np.poly1d(np.polyfit(x[:,0], x[:, 1], 1))(np.unique(x[:,0])), 'r-')
        plt.xlabel(name)
        plt.ylabel(df.columns[i+1])
        plt.savefig('{}vs{}'.format(name,df.columns[i+1]))
        plt.clf()