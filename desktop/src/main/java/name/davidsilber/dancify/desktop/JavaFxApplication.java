package name.davidsilber.dancify.desktop;

import javafx.application.Application;
import javafx.application.Platform;
import javafx.geometry.Rectangle2D;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Screen;
import javafx.stage.Stage;
import net.rgielen.fxweaver.core.FxWeaver;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

public class JavaFxApplication extends Application {

    private ConfigurableApplicationContext applicationContext;

    @Override
    public void init() {
        String[] args = getParameters().getRaw().toArray(new String[0]);

        this.applicationContext = new SpringApplicationBuilder()
                .sources(DancifyDesktopApplication.class)
                .run(args);
    }

    @Override
    public void start(Stage stage) {
        Rectangle2D visualBounds = Screen.getPrimary().getVisualBounds();
        double width = visualBounds.getWidth();
        double height = visualBounds.getHeight();

        FxWeaver fxWeaver = applicationContext.getBean(FxWeaver.class);
        Parent root = fxWeaver.loadView(MainStageController.class);
        Scene scene = new Scene(root, width, height);
        stage.setScene(scene);
        stage.show();
    }


    // @Override
    // public void start(Stage primaryStage) throws Exception {
    //     Rectangle2D visualBounds = Screen.getPrimary().getVisualBounds();
    //     double width = visualBounds.getWidth();
    //     double height = visualBounds.getHeight();
 
    //     primaryStage.setScene(new Scene(rootNode));
    //     primaryStage.centerOnScreen();
    //     primaryStage.show();
    // }

    @Override
    public void stop() {
        this.applicationContext.close();
        Platform.exit();
    }

}