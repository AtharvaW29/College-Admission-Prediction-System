import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, accuracy_score
from sklearn import preprocessing
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import MinMaxScaler, OneHotEncoder

# Data collection
# df = pd.read_csv('/content/Round2_JeeMain_Cutoff_2017-2022.csv')

# used this path for my local machine only
# df = pd.read_csv('D:\College-Admission-Prediction-System\Round2_JeeMain_Cutoff_2017-2022.csv')
# rounds = [1, 2, 3, 4, 5, 6]
# datasets = ["D:\College-Admission-Prediction-System\Round1_JeeMain_Cutoff_2017-2022.csv", "D:\College-Admission-Prediction-System\Round2_JeeMain_Cutoff_2017-2022.csv", "D:\College-Admission-Prediction-System\Round3_JeeMain_Cutoff_2017-2022.csv",
#             "D:\College-Admission-Prediction-System\Round4_JeeMain_Cutoff_2017-2022.csv", "D:\College-Admission-Prediction-System\Round5_JeeMain_Cutoff_2017-2022.csv", "D:\College-Admission-Prediction-System\Round6_JeeMain_Cutoff_2017-2022.csv"]

# print("Please select the round of admissions for which you want to use the prediction system:")
# for i in range(len(rounds)):
#     print(i+1, rounds[i])

# round_selection = int(input()) - 1
# selected_dataset = datasets[round_selection]
# df = pd.read_csv(selected_dataset)


# # select First 7 columns only
# df = df.iloc[:, :7]

# df['Gender'].fillna("Gender-Neutral", inplace=True)

# # select all attribute except the first label 
# X = df.iloc[:, 1:]

# # select the first column as a result
# y = df.iloc[:, 0]

# # all labels that is to be encoded
# cols_to_encode = ['Academic Program Name', 'Quota', 'Seat Type', 'Gender']

# # using different encoders for different labels
# i = 0
# encoders={}
# # H = encoder.fit_transform(X[cols_to_encode])
# for col in cols_to_encode:
#     encoders[i] = LabelEncoder()
#     X[col] = encoders[i].fit_transform(X[col])
#     i = i + 1

# encoders[i] = LabelEncoder()
# y_label = encoders[i].fit_transform(y)

# # Data Splitting in Training and Testing
# X_train, X_test, y_train, y_test = train_test_split(X.to_numpy(), y_label, test_size=0.20)

# # Random Forest Model for predictions
# rf = RandomForestRegressor(n_estimators=250,
#                            max_features=(2/7),
#                            min_samples_split=5,
#                            n_jobs=2,
#                            random_state=1005)

# # Training the Model
# rf.fit(X_train, y_train)

# # Model predictions
# train_predictions = rf.predict(X_train)
# test_predictions = rf.predict(X_test)

# # Evaluations Metrics
# train_mse = np.sqrt(mean_squared_error(y_train, train_predictions))
# test_mse = np.sqrt(mean_squared_error(y_test, test_predictions))
# train_r2 = rf.score(X_train, y_train)
# test_r2 = rf.score(X_test, y_test)

# print("Train MSE ::", train_mse)
# print("Test MSE ::", test_mse)
# print("Train R^2 ::", train_r2)
# print("Test R^2 ::", test_r2)

# # Save the model to disk
# joblib.dump(rf, 'classifier.joblib')

# Function to interact with the server
def get_predictions(data):
    rounds = [1, 2, 3, 4, 5, 6]
    datasets = ["./Round1_JeeMain_Cutoff_2017-2022.csv", "./Round2_JeeMain_Cutoff_2017-2022.csv",
                "./Round3_JeeMain_Cutoff_2017-2022.csv", "./Round4_JeeMain_Cutoff_2017-1022.csv",
                "./Round5_JeeMain_Cutoff_2017-2022.csv", "./Round6_JeeMain_Cutoff_2017-2022.csv"]

    # print("Please select the round of admissions for which you want to use the prediction system:")
    # for i in range(len(rounds)):
    #     print(i+1, rounds[i])

    round_selection = int(data['Round']) - 1
    selected_dataset = datasets[round_selection]
    df = pd.read_csv(selected_dataset)


    # select First 7 columns only
    df = df.iloc[:, :7]

    df['Gender'].fillna("Gender-Neutral", inplace=True)

    # select all attribute except the first label 
    X = df.iloc[:, 1:]

    # select the first column as a result
    y = df.iloc[:, 0]

    # all labels that is to be encoded
    cols_to_encode = ['Academic Program Name', 'Quota', 'Seat Type', 'Gender']

    # using different encoders for different labels
    i = 0
    encoders={}
    # H = encoder.fit_transform(X[cols_to_encode])
    for col in cols_to_encode:
        encoders[i] = LabelEncoder()
        X[col] = encoders[i].fit_transform(X[col])
        i = i + 1

    encoders[i] = LabelEncoder()
    y_label = encoders[i].fit_transform(y)

    # Data Splitting in Training and Testing
    X_train, X_test, y_train, y_test = train_test_split(X.to_numpy(), y_label, test_size=0.20)

    # Random Forest Model for predictions
    rf = RandomForestRegressor(n_estimators=250,
                            max_features=(2/7),
                            min_samples_split=5,
                            n_jobs=2,
                            random_state=1005)

    # Training the Model
    rf.fit(X_train, y_train)

    # Model predictions
    train_predictions = rf.predict(X_train)
    test_predictions = rf.predict(X_test)

    # Evaluations Metrics
    train_mse = np.sqrt(mean_squared_error(y_train, train_predictions))
    test_mse = np.sqrt(mean_squared_error(y_test, test_predictions))
    train_r2 = rf.score(X_train, y_train)
    test_r2 = rf.score(X_test, y_test)

    print("Train MSE ::", train_mse)
    print("Test MSE ::", test_mse)
    print("Train R^2 ::", train_r2)
    print("Test R^2 ::", test_r2)
    data['Closing Rank'] = float(data['Opening Rank']) + 0.5 * float(data['Opening Rank'])

    print(data['Closing Rank'])
    # encoding the user input to respective encoding of labels
    encoded_data = {
        'Academic Program Name': encoders[0].transform([data['Academic Program Name']])[0],
        'Quota': encoders[1].transform([data['Quota']])[0],
        'Seat Type': encoders[2].transform([data['Seat Type']])[0],
        'Gender': encoders[3].transform([data['Gender']])[0],
        'Opening Rank': data['Opening Rank'],
        'Closing Rank': data['Closing Rank'],
    }

    # Predictions based on encoded_data
    pred = rf.predict(np.array(list(encoded_data.values())).astype(float).reshape(1, -1))

    # Decoding the predictions so as to provide the predictions with its label value
    original_label = encoders[4].inverse_transform([int(pred[0])])
    
    print(original_label[0])
    # Returning the result
    return original_label[0]

# get_predictions({    
#     'Round': 6,
#     'Academic Program Name': 'Bio Technology (4 Years, Bachelor of Technology)',
#     'Quota': 'HS',
#     'Seat Type': 'OPEN',
#     'Gender': 'Gender-Neutral',
#     'Opening Rank': 6969,
#     'Closing Rank': 9892})
##################################################################################

## College listing code ##
# input_attributes = ["Institute", "Academic Program Name","Quota","Seat Type"]
# input_values = ["University of Hyderabad", "Computer Science (5 Years, Integrated Master of Technology)", "AI","OPEN"]

# # Create a boolean mask to filter the dataset
# mask = True
# for attribute, value in zip(input_attributes, input_values):
#     mask &= (df[attribute] == value)

# # Filter the dataset to only include rows where the input attributes have the input values
# subset_df = df[mask]

# # Select the input attributes and the selected attributes
# selected_attributes = ["Institute", "Academic Program Name","Quota","Seat Type"]
# selected_df = subset_df[selected_attributes]

# # Print the resulting dataframe
# # selected_array = selected_df.to_numpy()
# print(selected_df)
