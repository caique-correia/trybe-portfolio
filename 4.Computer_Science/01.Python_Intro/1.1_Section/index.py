import random
from collections import Counter

random_list = random.sample(range(1, 21), 2)

print(max(random_list), min(random_list))

counter = Counter(random_list)

print(counter.most_common())