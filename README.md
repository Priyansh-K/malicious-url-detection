# Malicious URL Detection

A comprehensive malicious URL detection system that combines machine learning with a user-friendly browser extension. This project helps users identify potentially harmful websites before accessing them.

## 🌟 Features

- **Machine Learning Model**: XGBoost-based classifier for accurate URL classification
- **REST API**: FastAPI-powered backend for real-time URL analysis
- **Browser Extension**: Chrome extension for seamless protection while browsing
- **Real-time Retraining**: Capability to retrain the model with new data
- **Feature Engineering**: Advanced URL feature extraction for improved detection

## 🏗️ Project Structure

```
malicious-url-detection/
├── detection/                  # Backend API and ML components
│   ├── main.py                # FastAPI application
│   ├── requirements.txt       # Python dependencies
│   ├── urldata.csv           # Training dataset
│   ├── Utils/
│   │   ├── predictor.py      # URL prediction logic
│   │   └── retrainer.py      # Model retraining utilities
│   └── Tests/
│       └── tests.ipynb       # Testing notebooks
├── extension/                 # Browser extension
│   ├── manifest.json         # Extension configuration
│   ├── popup.html           # Extension popup interface
│   ├── popup.js             # Extension JavaScript logic
│   ├── style.css            # Extension styling
│   └── icon.png             # Extension icon
├── test.ipynb               # Main testing notebook
└── urldata.csv             # Dataset
```

## 🚀 Getting Started

### Prerequisites

- Python 3.7+
- Chrome Browser (for extension)
- pip (Python package manager)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd malicious-url-detection
   ```

2. **Navigate to the detection directory**
   ```bash
   cd detection
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the API server**
   ```bash
   uvicorn main:app --reload
   ```

   The API will be available at `http://localhost:8000`

### Browser Extension Setup

1. **Open Chrome and navigate to extensions**
   - Go to `chrome://extensions/`
   - Enable "Developer mode"

2. **Load the extension**
   - Click "Load unpacked"
   - Select the `extension` folder

3. **Use the extension**
   - Click the extension icon in your browser toolbar
   - Click "Safe or Not?" to check the current website

## 📊 API Endpoints

The FastAPI backend provides the following endpoints:

- **GET /** - Welcome message and documentation link
- **GET /predict?url={url}** - Predict if a URL is malicious or benign
- **GET /retrain** - Trigger model retraining
- **GET /isrunning** - Check if retraining is in progress
- **GET /docs** - Interactive API documentation (Swagger UI)

### Example Usage

```bash
# Check if a URL is malicious
curl "http://localhost:8000/predict?url=https://example.com"

# Response
{
  "result": "benign"  // or "malicious"
}
```

## 🤖 Machine Learning Model

### Features Extracted

The system analyzes URLs using the following features:

- **Length-based features**: URL length, hostname length, path length
- **Character count features**: Special characters (-, @, ?, %, ., =)
- **Content analysis**: HTTP occurrences, digit count, letter count
- **Structural features**: Directory count, IP detection
- **Security indicators**: Shortened link detection

### Model Details

- **Algorithm**: XGBoost Classifier
- **Training Data**: URL dataset with benign and malicious labels
- **Features**: 15+ engineered features from URL structure and content
- **Output**: Binary classification (0 = benign, 1 = malicious)

## 🔄 Model Retraining

The system supports dynamic model retraining:

1. **Automatic retraining** via the `/retrain` endpoint
2. **Status monitoring** with the `/isrunning` endpoint
3. **Data preprocessing** with feature engineering pipeline
4. **Model persistence** using pickle serialization

## 🧪 Testing

### Jupyter Notebooks

- `test.ipynb` - Main testing and experimentation notebook
- `detection/Tests/tests.ipynb` - Detailed testing suite

### Running Tests

```bash
# Start Jupyter notebook
jupyter notebook

# Open and run test notebooks
```

## 📦 Dependencies

### Backend Dependencies

- **FastAPI**: Web framework for building APIs
- **pandas**: Data manipulation and analysis
- **numpy**: Numerical computing
- **XGBoost**: Machine learning algorithm
- **scikit-learn**: Machine learning utilities
- **uvicorn**: ASGI server
- **gunicorn**: Production WSGI server

### Extension Dependencies

- **jQuery**: JavaScript library for DOM manipulation
- **Chrome Extensions API**: Browser integration

## 🛡️ Security Features

- **Real-time analysis**: Instant URL classification
- **Feature-based detection**: Advanced URL feature analysis
- **Browser integration**: Seamless protection while browsing
- **API security**: CORS and CSP protection

## 🚧 Development

### Adding New Features

1. **Backend features**: Modify files in `detection/Utils/`
2. **API endpoints**: Update `detection/main.py`
3. **Extension features**: Modify files in `extension/`

### Model Improvements

1. **Feature engineering**: Update `retrainer.py`
2. **Algorithm changes**: Modify the model in `retrainer.py`
3. **Training data**: Update `urldata.csv`

## 📈 Performance

The system is designed for:

- **Fast prediction**: < 100ms response time
- **High accuracy**: Optimized feature engineering
- **Scalability**: FastAPI backend with async support
- **User experience**: Lightweight browser extension

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the API documentation at `http://localhost:8000/docs`
2. Review the test notebooks for examples
3. Open an issue in the repository

## 🔮 Future Enhancements

- **Deep learning models**: Neural network-based detection
- **Real-time updates**: Continuous learning from new threats
- **Multi-browser support**: Firefox and Safari extensions
- **Advanced features**: Phishing detection, malware analysis
- **Cloud deployment**: Scalable cloud infrastructure

---

**Stay safe online! 🛡️**
