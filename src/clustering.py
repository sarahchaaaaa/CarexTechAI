import pandas as pd 
from matplotlib import pyplot as plt
from sklearn.cluster import KMeans
import numpy as np
import json

data = pd.read_csv('small_resident_data.csv')
df = pd.DataFrame(data)
df = df.drop(['ResidentID'], axis=1)
print(df.head())
xpoint = df['Age']
ypoint = df['Medication']
x = np.array(list(zip(xpoint, ypoint)))

wcss = []
for i in range(1, 11):
    kmeans = KMeans(n_clusters=i, init='k-means++', max_iter=len(x), n_init=10, random_state=0)
    kmeans.fit(x)
    wcss.append(kmeans.inertia_)
plt.plot(range(1, 11), wcss)
plt.title('Elbow Method')
plt.xlabel('Number of clusters')
plt.ylabel('WCSS')
plt.show()
plt.clf()

kmeans = KMeans(n_clusters=3, init='k-means++', max_iter=len(x), n_init=10, random_state=0)
pred_y = kmeans.fit_predict(x)
plt.scatter(x[:,0], x[:,1])
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s=100, c='red')
plt.xlabel('Age')
plt.ylabel('Medication')
plt.show()
plt.clf()

def manhattan(a, b):
    return [np.abs(a[0] - b[i][0]) + np.abs(a[1] - b[i][1]) for i in range(len(b))]

clusters = {}
for centroid in map(tuple, kmeans.cluster_centers_): 
    centroid = str(centroid)
    clusters[centroid] = 0
    points = []
    for i in range(len(x)):
        distances = manhattan(x[i], kmeans.cluster_centers_)
        cluster = np.argmin(distances)
        if cluster == index: 
            points.append(str(tuple(x[i])))
        clusters[centroid] = points

print(clusters)
r = json.dumps(clusters)