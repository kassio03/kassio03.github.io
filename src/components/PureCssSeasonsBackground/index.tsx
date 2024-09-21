import './styles.css';

interface PureCssSeasonsBackgroundProps {
  scale: string;
}
const PureCssSeasonsBackground = ({ scale }: PureCssSeasonsBackgroundProps) => {
  return (
    <>
      <div
        id="seasonsBg"
        className={`custom-container h-[250px] overflow-x-auto overflow-y-hidden min-[425px]:h-[450px] min-[425px]:scale-100 ${scale} `}
      >
        <div className="season"></div>
        <div className="sunnyDay left-[50px] scale-50 min-[425px]:left-[150px] min-[425px]:scale-100"></div>
        <div className="rainbow -left-[130px] bottom-[0px] scale-50 min-[425px]:bottom-[32px] min-[425px]:left-[40px] min-[425px]:scale-100">
          <div className="rainbow-colour"></div>
          <div className="rainbow-colour"></div>
          <div className="rainbow-colour"></div>
          <div className="rainbow-colour"></div>
          <div className="rainbow-colour"></div>
          <div className="rainbow-colour"></div>
          <div className="rainbow-colour"></div>
        </div>
        <div className="cloud-group -left-[170px] -top-[60px] scale-50 min-[425px]:-top-[30px] min-[425px]:left-[0px] min-[425px]:scale-100">
          <div className="cloud">
            <div className="weather-container">
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
            </div>
          </div>
          <div className="cloud">
            <div className="weather-container">
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
            </div>
          </div>
          <div className="cloud">
            <div className="weather-container">
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
            </div>
          </div>
          <div className="cloud">
            <div className="weather-container">
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
            </div>
          </div>
          <div className="cloud">
            <div className="weather-container">
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
            </div>
          </div>
          <div className="cloud">
            <div className="weather-container">
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
            </div>
          </div>
          <div className="cloud">
            <div className="weather-container">
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
            </div>
          </div>
          <div className="cloud">
            <div className="weather-container">
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="snow"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
              <div className="rain"></div>
            </div>
          </div>
        </div>
        <div className="base -left-[150px] scale-50 min-[425px]:left-[20px] min-[425px]:scale-100">
          <div className="bush-group">
            <div className="bush"></div>
            <div className="bush"></div>
            <div className="bush"></div>
            <div className="bush"></div>
            <div className="bush"></div>
            <div className="bush"></div>
            <div className="bush"></div>
            <div className="bush"></div>
            <div className="bush"></div>
          </div>
          <div className="rabbit">
            <div className="head">
              <div className="ear"></div>
              <div className="ear"></div>
            </div>
          </div>
          <div className="tree-group">
            <div className="tree">
              <div className="trunk"></div>
              <div className="tree-top"></div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="tree-top"></div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="tree-top"></div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="branch"></div>
              <div className="branch"></div>
              <div className="branch"></div>
              <div className="branch"></div>
              <div className="branch"></div>
              <div className="branch"></div>
              <div className="branch"></div>
              <div className="branch"></div>
              <div className="branch"></div>
              <div className="branch"></div>
              <div className="branch"></div>
              <div className="branch"></div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="tree-top"></div>
              <div className="tree-top"></div>
              <div className="branch-two">
                <div className="tree-top"></div>
              </div>
              <div className="branch-two">
                <div className="tree-top"></div>
              </div>
              <div className="branch-two">
                <div className="tree-top"></div>
              </div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="tree-top"></div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="tree-top"></div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="tree-top">
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
              </div>
              <div className="tree-top"></div>
              <div className="tree-top"></div>
              <div className="flower">
                <div className="flower-in"></div>
                <div className="petal"></div>
                <div className="petal"></div>
                <div className="petal"></div>
              </div>
              <div className="flower">
                <div className="flower-in"></div>
                <div className="petal"></div>
                <div className="petal"></div>
                <div className="petal"></div>
              </div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="tree-top"> </div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="branch">
                <div className="branch-in"></div>
                <div className="pine-cone-row">
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                </div>
              </div>
              <div className="branch">
                <div className="branch-in"></div>
                <div className="pine-cone-row">
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                </div>
              </div>
              <div className="branch">
                <div className="branch-in"></div>
                <div className="pine-cone-row">
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                </div>
              </div>
              <div className="branch">
                <div className="branch-in"></div>
                <div className="pine-cone-row">
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                </div>
              </div>
              <div className="branch">
                <div className="branch-in"></div>
                <div className="pine-cone-row">
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                </div>
              </div>
              <div className="branch">
                <div className="branch-in"></div>
                <div className="pine-cone-row">
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                </div>
              </div>
              <div className="branch">
                <div className="branch-in"></div>
                <div className="pine-cone-row">
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                </div>
              </div>
              <div className="branch">
                <div className="branch-in"></div>
                <div className="pine-cone-row">
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                </div>
              </div>
              <div className="branch">
                <div className="branch-in"></div>
                <div className="pine-cone-row">
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                </div>
              </div>
              <div className="branch">
                <div className="branch-in"></div>
                <div className="pine-cone-row">
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                  <div className="pine-cone"></div>
                </div>
              </div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="tree-top"></div>
              <div className="tree-top"></div>
              <div className="tree-top"></div>
            </div>
            <div className="tree">
              <div className="trunk"> </div>
              <div className="tree-top">
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
              </div>
              <div className="tree-top"></div>
              <div className="tree-top"></div>
              <div className="flower">
                <div className="flower-in"></div>
                <div className="petal"></div>
                <div className="petal"></div>
                <div className="petal"></div>
              </div>
              <div className="flower">
                <div className="flower-in"></div>
                <div className="petal"></div>
                <div className="petal"></div>
                <div className="petal"></div>
              </div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="tree-top"> </div>
              <div className="tree-top"></div>
              <div className="tree-top"></div>
              <div className="branch-two">
                <div className="tree-top"></div>
              </div>
              <div className="branch-two">
                <div className="tree-top"></div>
              </div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="tree-top">
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
              </div>
              <div className="tree-top">
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
              </div>
              <div className="tree-top">
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
              </div>
            </div>
            <div className="tree">
              <div className="trunk"></div>
              <div className="tree-top">
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
              </div>
              <div className="tree-top">
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
                <div className="cone"> </div>
              </div>
              <div className="tree-top">
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
                <div className="cone"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PureCssSeasonsBackground;
